/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BOBRoulette } from "./message-contexts/bob-roulette";
import { Crash } from "./message-contexts/crash";
import { CrashDice } from "./message-contexts/crash-dice";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { Mines } from "./message-contexts/mines";
import { Tower } from "./message-contexts/tower";

export interface MessageContext {
  fairCoinToss?: FairCoinToss | undefined;
  crash?: Crash | undefined;
  hilo?: HiLo | undefined;
  crashDice?: CrashDice | undefined;
  bobRoulette?: BOBRoulette | undefined;
  mines?: Mines | undefined;
  tower?: Tower | undefined;
}

function createBaseMessageContext(): MessageContext {
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

export const MessageContext = {
  encode(message: MessageContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fairCoinToss !== undefined) {
      FairCoinToss.encode(message.fairCoinToss, writer.uint32(10).fork()).ldelim();
    }
    if (message.crash !== undefined) {
      Crash.encode(message.crash, writer.uint32(18).fork()).ldelim();
    }
    if (message.hilo !== undefined) {
      HiLo.encode(message.hilo, writer.uint32(26).fork()).ldelim();
    }
    if (message.crashDice !== undefined) {
      CrashDice.encode(message.crashDice, writer.uint32(34).fork()).ldelim();
    }
    if (message.bobRoulette !== undefined) {
      BOBRoulette.encode(message.bobRoulette, writer.uint32(42).fork()).ldelim();
    }
    if (message.mines !== undefined) {
      Mines.encode(message.mines, writer.uint32(50).fork()).ldelim();
    }
    if (message.tower !== undefined) {
      Tower.encode(message.tower, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fairCoinToss = FairCoinToss.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.crash = Crash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hilo = HiLo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.crashDice = CrashDice.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bobRoulette = BOBRoulette.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.mines = Mines.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tower = Tower.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageContext {
    return {
      fairCoinToss: isSet(object.fairCoinToss) ? FairCoinToss.fromJSON(object.fairCoinToss) : undefined,
      crash: isSet(object.crash) ? Crash.fromJSON(object.crash) : undefined,
      hilo: isSet(object.hilo) ? HiLo.fromJSON(object.hilo) : undefined,
      crashDice: isSet(object.crashDice) ? CrashDice.fromJSON(object.crashDice) : undefined,
      bobRoulette: isSet(object.bobRoulette) ? BOBRoulette.fromJSON(object.bobRoulette) : undefined,
      mines: isSet(object.mines) ? Mines.fromJSON(object.mines) : undefined,
      tower: isSet(object.tower) ? Tower.fromJSON(object.tower) : undefined,
    };
  },

  toJSON(message: MessageContext): unknown {
    const obj: any = {};
    if (message.fairCoinToss !== undefined) {
      obj.fairCoinToss = FairCoinToss.toJSON(message.fairCoinToss);
    }
    if (message.crash !== undefined) {
      obj.crash = Crash.toJSON(message.crash);
    }
    if (message.hilo !== undefined) {
      obj.hilo = HiLo.toJSON(message.hilo);
    }
    if (message.crashDice !== undefined) {
      obj.crashDice = CrashDice.toJSON(message.crashDice);
    }
    if (message.bobRoulette !== undefined) {
      obj.bobRoulette = BOBRoulette.toJSON(message.bobRoulette);
    }
    if (message.mines !== undefined) {
      obj.mines = Mines.toJSON(message.mines);
    }
    if (message.tower !== undefined) {
      obj.tower = Tower.toJSON(message.tower);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageContext>, I>>(base?: I): MessageContext {
    return MessageContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageContext>, I>>(object: I): MessageContext {
    const message = createBaseMessageContext();
    message.fairCoinToss = (object.fairCoinToss !== undefined && object.fairCoinToss !== null)
      ? FairCoinToss.fromPartial(object.fairCoinToss)
      : undefined;
    message.crash = (object.crash !== undefined && object.crash !== null) ? Crash.fromPartial(object.crash) : undefined;
    message.hilo = (object.hilo !== undefined && object.hilo !== null) ? HiLo.fromPartial(object.hilo) : undefined;
    message.crashDice = (object.crashDice !== undefined && object.crashDice !== null)
      ? CrashDice.fromPartial(object.crashDice)
      : undefined;
    message.bobRoulette = (object.bobRoulette !== undefined && object.bobRoulette !== null)
      ? BOBRoulette.fromPartial(object.bobRoulette)
      : undefined;
    message.mines = (object.mines !== undefined && object.mines !== null) ? Mines.fromPartial(object.mines) : undefined;
    message.tower = (object.tower !== undefined && object.tower !== null) ? Tower.fromPartial(object.tower) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
