"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeBOBRouletteResult = exports.computeCrashDiceResult = exports.computeCrashResult = exports.computeFairCoinTossOutcome = exports.computeFairCoinTossResult = void 0;
const sha256_1 = require("@noble/hashes/sha256");
const hmac_1 = require("@noble/hashes/hmac");
const currency_1 = require("./generated/currency");
const fair_coin_toss_1 = require("./generated/message-contexts/fair-coin-toss");
const utils_1 = require("@noble/hashes/utils");
function computeFairCoinTossResult(sig) {
    // We're going to hash the signature just to really be sure its fairly distributed
    const hash = (0, sha256_1.sha256)(sig);
    const result = hash[0] % 2;
    if (result == 0) {
        return fair_coin_toss_1.FairCoinToss_Choice.HEADS;
    }
    else {
        return fair_coin_toss_1.FairCoinToss_Choice.TAILS;
    }
}
exports.computeFairCoinTossResult = computeFairCoinTossResult;
function computeFairCoinTossOutcome(sig, w) {
    const result = computeFairCoinTossResult(sig);
    const win = w.playerChoice === result;
    const profit = win ? 1 : -1;
    return {
        result,
        playerProfit: { currency: currency_1.Currency.CURRENCY_UNSPECIFIED, amount: profit },
    };
}
exports.computeFairCoinTossOutcome = computeFairCoinTossOutcome;
function doComputeCrashResult(hash, houseEdge) {
    const nBits = 52;
    const hashHex = (0, utils_1.bytesToHex)(hash);
    const seed = hashHex.slice(0, nBits / 4);
    const r = Number.parseInt(seed, 16);
    let X = r / 2 ** nBits; // uniformly distributed in [0; 1)
    let Y = 1 - X; // Now it's uniformly distributed in (0; 1], so it's safe to divide by it
    let result = (1 - houseEdge) / Y;
    result = Math.floor(result * 100) / 100;
    result = Math.max(1, result);
    return result;
}
function computeCrashResult(sig, gameHash, // This is the hash of the message
houseEdge = 0) {
    return doComputeCrashResult((0, hmac_1.hmac)(sha256_1.sha256, sig, gameHash), houseEdge);
}
exports.computeCrashResult = computeCrashResult;
function computeCrashDiceResult(sig, houseEdge) {
    return doComputeCrashResult((0, sha256_1.sha256)(sig), houseEdge);
}
exports.computeCrashDiceResult = computeCrashDiceResult;
function computeBOBRouletteResult(sig) {
    const hash = (0, sha256_1.sha256)(sig);
    const nBits = 52;
    const hashHex = (0, utils_1.bytesToHex)(hash);
    const seed = hashHex.slice(0, nBits / 4);
    const n = Number.parseInt(seed, 16) % 15; // number between [0, 14] evenly distributed
    if (n == 0) {
        return "bonus";
    }
    else if (n <= 7) {
        return "orange";
    }
    else {
        return "black";
    }
}
exports.computeBOBRouletteResult = computeBOBRouletteResult;
