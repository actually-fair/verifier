import { sha256 } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";

import { Currency } from "./generated/currency";
import {
  FairCoinToss,
  FairCoinToss_Choice,
} from "./generated/message-contexts/fair-coin-toss";
import { bytesToHex } from "@noble/hashes/utils";

export function computeFairCoinTossResult(sig: Uint8Array) {
  // We're going to hash the signature just to really be sure its fairly distributed
  const hash = sha256(sig);
  const result = hash[0] % 2;
  if (result == 0) {
    return FairCoinToss_Choice.HEADS;
  } else {
    return FairCoinToss_Choice.TAILS;
  }
}

export function computeFairCoinTossOutcome(sig: Uint8Array, w: FairCoinToss) {
  const result = computeFairCoinTossResult(sig);

  const win = w.playerChoice === result;

  const profit = win ? 1 : -1;

  return {
    result,
    playerProfit: { currency: Currency.CURRENCY_UNSPECIFIED, amount: profit },
  };
}

function doComputeCrashResult(hash: Uint8Array, houseEdge: number) {
  const nBits = 52;
  const hashHex = bytesToHex(hash);

  const seed = hashHex.slice(0, nBits / 4);
  const r = Number.parseInt(seed, 16);

  let X = r / 2 ** nBits; // uniformly distributed in [0; 1)
  let Y = 1 - X; // Now it's uniformly distributed in (0; 1], so it's safe to divide by it

  let result = (1 - houseEdge) / Y;

  result = Math.floor(result * 100) / 100;

  result = Math.max(1, result);

  return result;
}

export function computeCrashResult(
  sig: Uint8Array,
  gameHash: Uint8Array, // This is the hash of the message
  houseEdge: number = 0
) {
  return doComputeCrashResult(hmac(sha256, sig, gameHash), houseEdge);
}

export function computeCrashDiceResult(sig: Uint8Array, houseEdge: number) {
  return doComputeCrashResult(sha256(sig), houseEdge);
}

export function computeBOBRouletteResult(
  sig: Uint8Array
): "black" | "orange" | "bonus" {
  const hash = sha256(sig);

  const nBits = 52;
  const hashHex = bytesToHex(hash);

  const seed = hashHex.slice(0, nBits / 4);
  const n = Number.parseInt(seed, 16) % 15; // number between [0, 14] evenly distributed
  if (n == 0) {
    return "bonus";
  } else if (n <= 7) {
    return "orange";
  } else {
    return "black";
  }
}
