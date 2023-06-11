/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export enum Card {
  Ace = 0,
  Two = 1,
  Three = 2,
  Four = 3,
  Five = 4,
  Six = 5,
  Seven = 6,
  Eight = 7,
  Nine = 8,
  Ten = 9,
  Jack = 10,
  Queen = 11,
  King = 12,
  UNRECOGNIZED = -1,
}

export function cardFromJSON(object: any): Card {
  switch (object) {
    case 0:
    case "Ace":
      return Card.Ace;
    case 1:
    case "Two":
      return Card.Two;
    case 2:
    case "Three":
      return Card.Three;
    case 3:
    case "Four":
      return Card.Four;
    case 4:
    case "Five":
      return Card.Five;
    case 5:
    case "Six":
      return Card.Six;
    case 6:
    case "Seven":
      return Card.Seven;
    case 7:
    case "Eight":
      return Card.Eight;
    case 8:
    case "Nine":
      return Card.Nine;
    case 9:
    case "Ten":
      return Card.Ten;
    case 10:
    case "Jack":
      return Card.Jack;
    case 11:
    case "Queen":
      return Card.Queen;
    case 12:
    case "King":
      return Card.King;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Card.UNRECOGNIZED;
  }
}

export function cardToJSON(object: Card): string {
  switch (object) {
    case Card.Ace:
      return "Ace";
    case Card.Two:
      return "Two";
    case Card.Three:
      return "Three";
    case Card.Four:
      return "Four";
    case Card.Five:
      return "Five";
    case Card.Six:
      return "Six";
    case Card.Seven:
      return "Seven";
    case Card.Eight:
      return "Eight";
    case Card.Nine:
      return "Nine";
    case Card.Ten:
      return "Ten";
    case Card.Jack:
      return "Jack";
    case Card.Queen:
      return "Queen";
    case Card.King:
      return "King";
    case Card.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HiLo {
  amount: Amount | undefined;
  startingCard: Card;
}

/** This is based on stakes hilo game */
export interface HiLoMove {
  playerChoice: HiLoMove_Choice;
  moveIndex: number;
}

export enum HiLoMove_Choice {
  Hi = 0,
  Lo = 1,
  Skip = 2,
  Cashout = 3,
  UNRECOGNIZED = -1,
}

export function hiLoMove_ChoiceFromJSON(object: any): HiLoMove_Choice {
  switch (object) {
    case 0:
    case "Hi":
      return HiLoMove_Choice.Hi;
    case 1:
    case "Lo":
      return HiLoMove_Choice.Lo;
    case 2:
    case "Skip":
      return HiLoMove_Choice.Skip;
    case 3:
    case "Cashout":
      return HiLoMove_Choice.Cashout;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HiLoMove_Choice.UNRECOGNIZED;
  }
}

export function hiLoMove_ChoiceToJSON(object: HiLoMove_Choice): string {
  switch (object) {
    case HiLoMove_Choice.Hi:
      return "Hi";
    case HiLoMove_Choice.Lo:
      return "Lo";
    case HiLoMove_Choice.Skip:
      return "Skip";
    case HiLoMove_Choice.Cashout:
      return "Cashout";
    case HiLoMove_Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseHiLo(): HiLo {
  return { amount: undefined, startingCard: 0 };
}

export const HiLo = {
  encode(message: HiLo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingCard !== 0) {
      writer.uint32(16).int32(message.startingCard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiLo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiLo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startingCard = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiLo {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      startingCard: isSet(object.startingCard) ? cardFromJSON(object.startingCard) : 0,
    };
  },

  toJSON(message: HiLo): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.startingCard !== undefined && (obj.startingCard = cardToJSON(message.startingCard));
    return obj;
  },

  create<I extends Exact<DeepPartial<HiLo>, I>>(base?: I): HiLo {
    return HiLo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HiLo>, I>>(object: I): HiLo {
    const message = createBaseHiLo();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.startingCard = object.startingCard ?? 0;
    return message;
  },
};

function createBaseHiLoMove(): HiLoMove {
  return { playerChoice: 0, moveIndex: 0 };
}

export const HiLoMove = {
  encode(message: HiLoMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerChoice !== 0) {
      writer.uint32(8).int32(message.playerChoice);
    }
    if (message.moveIndex !== 0) {
      writer.uint32(16).int32(message.moveIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiLoMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiLoMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playerChoice = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.moveIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiLoMove {
    return {
      playerChoice: isSet(object.playerChoice) ? hiLoMove_ChoiceFromJSON(object.playerChoice) : 0,
      moveIndex: isSet(object.moveIndex) ? Number(object.moveIndex) : 0,
    };
  },

  toJSON(message: HiLoMove): unknown {
    const obj: any = {};
    message.playerChoice !== undefined && (obj.playerChoice = hiLoMove_ChoiceToJSON(message.playerChoice));
    message.moveIndex !== undefined && (obj.moveIndex = Math.round(message.moveIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<HiLoMove>, I>>(base?: I): HiLoMove {
    return HiLoMove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HiLoMove>, I>>(object: I): HiLoMove {
    const message = createBaseHiLoMove();
    message.playerChoice = object.playerChoice ?? 0;
    message.moveIndex = object.moveIndex ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
