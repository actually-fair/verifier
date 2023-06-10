import _m0 from "protobufjs/minimal";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { VHEMPCrash } from "./message-contexts/vhemp-crash";
export interface MessageContext {
    fairCoinToss?: FairCoinToss | undefined;
    vhempCrash?: VHEMPCrash | undefined;
}
export declare const MessageContext: {
    encode(message: MessageContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageContext;
    fromJSON(object: any): MessageContext;
    toJSON(message: MessageContext): unknown;
    create<I extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } | undefined;
        vhempCrash?: {
            gameId?: number | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } & { [K in Exclude<keyof I["fairCoinToss"], keyof FairCoinToss>]: never; }) | undefined;
        vhempCrash?: ({
            gameId?: number | undefined;
        } & {
            gameId?: number | undefined;
        } & { [K_1 in Exclude<keyof I["vhempCrash"], "gameId">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MessageContext>]: never; }>(base?: I | undefined): MessageContext;
    fromPartial<I_1 extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } | undefined;
        vhempCrash?: {
            gameId?: number | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
            nonce?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["fairCoinToss"], keyof FairCoinToss>]: never; }) | undefined;
        vhempCrash?: ({
            gameId?: number | undefined;
        } & {
            gameId?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["vhempCrash"], "gameId">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MessageContext>]: never; }>(object: I_1): MessageContext;
};