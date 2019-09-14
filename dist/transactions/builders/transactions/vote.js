"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../../enums");
const managers_1 = require("../../../managers");
const utils_1 = require("../../../utils");
const transaction_1 = require("./transaction");
class VoteBuilder extends transaction_1.TransactionBuilder {
    constructor() {
        super();
        this.data.type = enums_1.TransactionTypes.Vote;
        this.data.fee = managers_1.feeManager.get(enums_1.TransactionTypes.Vote);
        this.data.amount = utils_1.BigNumber.ZERO;
        this.data.recipientId = undefined;
        this.data.senderPublicKey = undefined;
        this.data.asset = { votes: [] };
        this.signWithSenderAsRecipient = true;
    }
    votesAsset(votes) {
        this.data.asset.votes = votes;
        return this;
    }
    getStruct() {
        const struct = super.getStruct();
        struct.amount = this.data.amount;
        struct.recipientId = this.data.recipientId;
        struct.asset = this.data.asset;
        return struct;
    }
    instance() {
        return this;
    }
}
exports.VoteBuilder = VoteBuilder;
//# sourceMappingURL=vote.js.map