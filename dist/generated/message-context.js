"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContext = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const bob_roulette_1 = require("./message-contexts/bob-roulette");
const crash_1 = require("./message-contexts/crash");
const crash_dice_1 = require("./message-contexts/crash-dice");
const fair_coin_toss_1 = require("./message-contexts/fair-coin-toss");
const hilo_1 = require("./message-contexts/hilo");
const mines_1 = require("./message-contexts/mines");
const tower_1 = require("./message-contexts/tower");
function createBaseMessageContext() {
    return {
        fairCoinToss: undefined,
        crash: undefined,
        hilo: undefined,
        crashDice: undefined,
        bobRoulette: undefined,
        mines: undefined,
        tower: undefined,
    };
}
exports.MessageContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fairCoinToss !== undefined) {
            fair_coin_toss_1.FairCoinToss.encode(message.fairCoinToss, writer.uint32(10).fork()).ldelim();
        }
        if (message.crash !== undefined) {
            crash_1.Crash.encode(message.crash, writer.uint32(18).fork()).ldelim();
        }
        if (message.hilo !== undefined) {
            hilo_1.HiLo.encode(message.hilo, writer.uint32(26).fork()).ldelim();
        }
        if (message.crashDice !== undefined) {
            crash_dice_1.CrashDice.encode(message.crashDice, writer.uint32(34).fork()).ldelim();
        }
        if (message.bobRoulette !== undefined) {
            bob_roulette_1.BOBRoulette.encode(message.bobRoulette, writer.uint32(42).fork()).ldelim();
        }
        if (message.mines !== undefined) {
            mines_1.Mines.encode(message.mines, writer.uint32(50).fork()).ldelim();
        }
        if (message.tower !== undefined) {
            tower_1.Tower.encode(message.tower, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fairCoinToss = fair_coin_toss_1.FairCoinToss.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.crash = crash_1.Crash.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hilo = hilo_1.HiLo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.crashDice = crash_dice_1.CrashDice.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.bobRoulette = bob_roulette_1.BOBRoulette.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.mines = mines_1.Mines.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tower = tower_1.Tower.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fairCoinToss: isSet(object.fairCoinToss) ? fair_coin_toss_1.FairCoinToss.fromJSON(object.fairCoinToss) : undefined,
            crash: isSet(object.crash) ? crash_1.Crash.fromJSON(object.crash) : undefined,
            hilo: isSet(object.hilo) ? hilo_1.HiLo.fromJSON(object.hilo) : undefined,
            crashDice: isSet(object.crashDice) ? crash_dice_1.CrashDice.fromJSON(object.crashDice) : undefined,
            bobRoulette: isSet(object.bobRoulette) ? bob_roulette_1.BOBRoulette.fromJSON(object.bobRoulette) : undefined,
            mines: isSet(object.mines) ? mines_1.Mines.fromJSON(object.mines) : undefined,
            tower: isSet(object.tower) ? tower_1.Tower.fromJSON(object.tower) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fairCoinToss !== undefined) {
            obj.fairCoinToss = fair_coin_toss_1.FairCoinToss.toJSON(message.fairCoinToss);
        }
        if (message.crash !== undefined) {
            obj.crash = crash_1.Crash.toJSON(message.crash);
        }
        if (message.hilo !== undefined) {
            obj.hilo = hilo_1.HiLo.toJSON(message.hilo);
        }
        if (message.crashDice !== undefined) {
            obj.crashDice = crash_dice_1.CrashDice.toJSON(message.crashDice);
        }
        if (message.bobRoulette !== undefined) {
            obj.bobRoulette = bob_roulette_1.BOBRoulette.toJSON(message.bobRoulette);
        }
        if (message.mines !== undefined) {
            obj.mines = mines_1.Mines.toJSON(message.mines);
        }
        if (message.tower !== undefined) {
            obj.tower = tower_1.Tower.toJSON(message.tower);
        }
        return obj;
    },
    create(base) {
        return exports.MessageContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageContext();
        message.fairCoinToss = (object.fairCoinToss !== undefined && object.fairCoinToss !== null)
            ? fair_coin_toss_1.FairCoinToss.fromPartial(object.fairCoinToss)
            : undefined;
        message.crash = (object.crash !== undefined && object.crash !== null) ? crash_1.Crash.fromPartial(object.crash) : undefined;
        message.hilo = (object.hilo !== undefined && object.hilo !== null) ? hilo_1.HiLo.fromPartial(object.hilo) : undefined;
        message.crashDice = (object.crashDice !== undefined && object.crashDice !== null)
            ? crash_dice_1.CrashDice.fromPartial(object.crashDice)
            : undefined;
        message.bobRoulette = (object.bobRoulette !== undefined && object.bobRoulette !== null)
            ? bob_roulette_1.BOBRoulette.fromPartial(object.bobRoulette)
            : undefined;
        message.mines = (object.mines !== undefined && object.mines !== null) ? mines_1.Mines.fromPartial(object.mines) : undefined;
        message.tower = (object.tower !== undefined && object.tower !== null) ? tower_1.Tower.fromPartial(object.tower) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
