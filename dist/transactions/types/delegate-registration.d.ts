import ByteBuffer from "bytebuffer";
import { ISerializeOptions } from "../../interfaces";
import { BigNumber } from "../../utils/bignum";
import * as schemas from "./schemas";
import { Transaction } from "./transaction";
export declare class DelegateRegistrationTransaction extends Transaction {
    static typeGroup: number;
    static type: number;
    static key: string;
    static getSchema(): schemas.TransactionSchema;
    protected static defaultStaticFee: BigNumber;
    serialize(options?: ISerializeOptions): ByteBuffer;
    deserialize(buf: ByteBuffer): void;
}
