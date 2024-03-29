/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Currency, currencyFromJSON, currencyToJSON } from "./currency";

export interface Amount {
  currency: Currency;
  /**
   * value used to be a int64, but it has been removed in favor of a double version
   * int64    value = 2;
   */
  value: number;
}

function createBaseAmount(): Amount {
  return { currency: 0, value: 0 };
}

export const Amount = {
  encode(message: Amount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== 0) {
      writer.uint32(8).int32(message.currency);
    }
    if (message.value !== 0) {
      writer.uint32(25).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Amount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Amount {
    return {
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Amount): unknown {
    const obj: any = {};
    if (message.currency !== 0) {
      obj.currency = currencyToJSON(message.currency);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Amount>, I>>(base?: I): Amount {
    return Amount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Amount>, I>>(object: I): Amount {
    const message = createBaseAmount();
    message.currency = object.currency ?? 0;
    message.value = object.value ?? 0;
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
