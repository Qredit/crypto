export declare const mainnet: {
    exceptions: {
        "blocks": string[];
        "transactions": string[];
        "outlookTable": {
            "5139199631254983076": string;
        };
        "transactionIdFixTable": {
            "ca764c01dd78f93393b02f7f6c4f0c12ed8e7ca26d3098e91d6e461a238a6b33": string;
        };
        "wrongTransactionOrder": {
            "11773170219525190460": string[];
            "5847703302374058501": string[];
        };
        "negativeBalances": {
            "03d0102c85624e5bdfef4a82faea7badded8bc0dc5e087bd71d75bb534641404a1": {
                "8": string;
            };
        };
    };
    genesisBlock: {
        "version": number;
        "totalAmount": string;
        "totalFee": string;
        "reward": string;
        "payloadHash": string;
        "timestamp": number;
        "numberOfTransactions": number;
        "payloadLength": number;
        "previousBlock": any;
        "generatorPublicKey": string;
        "transactions": ({
            "type": number;
            "amount": string;
            "fee": string;
            "recipientId": string;
            "timestamp": number;
            "asset": {
                "delegate"?: undefined;
            };
            "senderPublicKey": string;
            "signature": string;
            "id": string;
        } | {
            "type": number;
            "amount": string;
            "fee": string;
            "recipientId": any;
            "senderPublicKey": string;
            "timestamp": number;
            "asset": {
                "delegate": {
                    "username": string;
                    "publicKey": string;
                };
            };
            "signature": string;
            "id": string;
        })[];
        "height": number;
        "id": string;
        "blockSignature": string;
    };
    milestones: ({
        "height": number;
        "reward": number;
        "activeDelegates": number;
        "blocktime": number;
        "block": {
            "version": number;
            "maxTransactions": number;
            "maxPayload": number;
            "acceptExpiredTransactionTimestamps": boolean;
            "idFullSha256"?: undefined;
        };
        "epoch": string;
        "fees": {
            "staticFees": {
                "transfer": number;
                "secondSignature": number;
                "delegateRegistration": number;
                "vote": number;
                "multiSignature": number;
                "ipfs": number;
                "multiPayment": number;
                "delegateResignation": number;
                "htlcLock": number;
                "htlcClaim": number;
                "htlcRefund": number;
            };
        };
        "vendorFieldLength": number;
        "multiPaymentLimit": number;
        "aip11"?: undefined;
    } | {
        "height": number;
        "reward": number;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "block"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "vendorFieldLength"?: undefined;
        "multiPaymentLimit"?: undefined;
        "aip11"?: undefined;
    } | {
        "height": number;
        "block": {
            "maxTransactions": number;
            "maxPayload": number;
            "version"?: undefined;
            "acceptExpiredTransactionTimestamps"?: undefined;
            "idFullSha256"?: undefined;
        };
        "reward"?: undefined;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "vendorFieldLength"?: undefined;
        "multiPaymentLimit"?: undefined;
        "aip11"?: undefined;
    } | {
        "height": number;
        "vendorFieldLength": number;
        "reward"?: undefined;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "block"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "multiPaymentLimit"?: undefined;
        "aip11"?: undefined;
    } | {
        "height": number;
        "block": {
            "idFullSha256": boolean;
            "version"?: undefined;
            "maxTransactions"?: undefined;
            "maxPayload"?: undefined;
            "acceptExpiredTransactionTimestamps"?: undefined;
        };
        "reward"?: undefined;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "vendorFieldLength"?: undefined;
        "multiPaymentLimit"?: undefined;
        "aip11"?: undefined;
    } | {
        "height": number;
        "block": {
            "acceptExpiredTransactionTimestamps": boolean;
            "version"?: undefined;
            "maxTransactions"?: undefined;
            "maxPayload"?: undefined;
            "idFullSha256"?: undefined;
        };
        "reward"?: undefined;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "vendorFieldLength"?: undefined;
        "multiPaymentLimit"?: undefined;
        "aip11"?: undefined;
    } | {
        "height": number;
        "aip11": boolean;
        "reward"?: undefined;
        "activeDelegates"?: undefined;
        "blocktime"?: undefined;
        "block"?: undefined;
        "epoch"?: undefined;
        "fees"?: undefined;
        "vendorFieldLength"?: undefined;
        "multiPaymentLimit"?: undefined;
    })[];
    network: {
        "name": string;
        "messagePrefix": string;
        "bip32": {
            "public": number;
            "private": number;
        };
        "pubKeyHash": number;
        "nethash": string;
        "wif": number;
        "slip44": number;
        "aip20": number;
        "client": {
            "token": string;
            "symbol": string;
            "explorer": string;
        };
    };
};
