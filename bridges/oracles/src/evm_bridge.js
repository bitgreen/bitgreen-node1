import Web3 from 'web3';
// import HDWalletProvider from '@truffle/hdwallet-provider';
import { readFileSync } from 'fs';
import { dirname, join, normalize, format } from 'path';
import { fileURLToPath } from 'url';
export const NODE_ADDRESS = process.env.NODE_ADDRESS || Web3.givenProvider || 'ws://127.0.0.1:8545';
const ROUTER_ADDRESS = process.env.ROUTER_ADDRESS || '0x4A3699e2f1dB72b37f2939E01A990438231cf34a';
// const mnemonicPhrase = process.env.MNEMONIC_PHRASE || "until ethics hollow size piano patient pole abuse model soon slender wall"; // 12 word mnemonic
export const privateKey = process.env.PRIVATE_KEY || "0x7830e09c30e5fc49ce6771fafdedbe1c241daf7828497f78ffb447160769e439";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const keeper_pk1 = '0x1d5b454dd5885cab88c648873a0a45a28beeb52313c493b2e81560474b2bf8a9';
export const keeper_pk2 = '0xdbcaf7b88b9b7137ae2571051a7d06b94288f86aece8b1c777db8ebdcd1686c0';
export const keeper_pk3 = '0xf81bf982b97928ba6f48dbe07d0d005edb40d3bcab1e16f1f15e43d47bc4f703';
export const get_erc20 = async (asset_id) => {
    const erc20 = '0x0000000000000000000000000000000000000000';
    return erc20;
};
export async function call_contractsumary(web3, contract) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    console.log('account: \t ', account);
    await contract.methods.owner().call()
        .then(function (result) {
        console.log('owner: \t ', result);
    });
    await contract.methods.getLockdown().call()
        .then(function (result) {
        console.log('getLockdown: \t ', result);
    });
    await contract.methods.lockdown().call()
        .then(function (result) {
        console.log('lockdown: \t ', result);
    });
    await contract.methods.getThreshold().call()
        .then(function (result) {
        console.log('getThreshold: \t ', result);
    });
    await contract.methods.balancewithdrawalfees().call()
        .then(function (result) {
        console.log('balancewithdrawalfees: \t ', result);
    });
    await contract.methods.maximumwithdrawalfees().call()
        .then(function (result) {
        console.log('maximumwithdrawalfees: \t ', result);
    });
    await contract.methods.minimumwithdrawalfees().call()
        .then(function (result) {
        console.log('minimumwithdrawalfees: \t ', result);
    });
    await contract.methods.withdrawalfees().call()
        .then(function (result) {
        console.log('withdrawalfees: \t ', result);
    });
    await contract.methods.getWithdrawalFees().call()
        .then(function (result) {
        console.log('getWithdrawalFees: \t ', result);
    });
    await contract.methods.getBalance().call()
        .then(function (result) {
        console.log('getBalance: \t ', result);
    });
    await contract.methods.getKeepers().call()
        .then(function (result) {
        console.log('getKeepers: \t ', result);
    });
    await contract.methods.getWatchdogs().call()
        .then(function (result) {
        console.log('getWatchdogs: \t ', result);
    });
    await contract.methods.getWatchcats().call()
        .then(function (result) {
        console.log('getWatchcats: \t ', result);
    });
}
async function send(web3, gasPrice, contract, method, params) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods[method](params);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setKeepers(web3, gasPrice, contract, keepers) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setKeepers(keepers);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setLockdown(web3, gasPrice, contract) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setLockdown();
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setMinimumWithDrawalFees(web3, gasPrice, contract, value) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setMinimumWithDrawalFees(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setThreshold(web3, gasPrice, contract, value) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setThreshold(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setWatchcats(web3, gasPrice, contract, value) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setWatchcats(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setWatchdogs(web3, gasPrice, contract, value) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setWatchdogs(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_setWithDrawalFews(web3, gasPrice, contract, value) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.setWithDrawalFews(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export const deposit_method = async (web3, gasPrice, contract, pk, amount, destination) => {
    const account = web3.eth.accounts.privateKeyToAccount(pk).address;
    const transaction = contract.methods.deposit(destination);
    const gas = await transaction.estimateGas({ from: account });
    console.log(gas);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas:  gas,
        gasPrice: gasPrice,
        value: amount,
    };
    const signed = (await web3.eth.accounts.signTransaction(options, pk)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
};

export const deposit = async (web3, gasPrice, pk, amount, destination) => {
    const options = {
        to: ROUTER_ADDRESS,
        gas:  22496,
        gasPrice: gasPrice,
        value: amount,
        data: destination
    };
    const signed = (await web3.eth.accounts.signTransaction(options, pk)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
};

export async function send_transfer(web3, gasPrice, contract, pk, txid, recipient, amount, erc20) {
    const account = web3.eth.accounts.privateKeyToAccount(pk).address;
    const transaction = contract.methods.transfer(txid, recipient, amount, erc20);
    // console.log(transaction);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, pk)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_transferOwnership(web3, gasPrice, contract, pk, value) {
    const account = web3.eth.accounts.privateKeyToAccount(pk).address;
    const transaction = contract.methods.transferOwnership(value);
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, pk)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export async function send_unsetLockdown(web3, gasPrice, contract) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const transaction = contract.methods.unsetLockdown();
    const options = {
        to: transaction._parent._address,
        data: transaction.encodeABI(),
        gas: await transaction.estimateGas({ from: account }),
        gasPrice: gasPrice
    };
    const signed = (await web3.eth.accounts.signTransaction(options, privateKey)).rawTransaction;
    let receipt = null;
    if (signed) {
        receipt = await web3.eth.sendSignedTransaction(signed);
    }
    return receipt;
}
export const get_bitgreen_bridge_contract = async (web3) => {
    const relative_path = join('..', '..');
    const root_path = normalize(join(__dirname, relative_path));
    const inner_path = join('ethereum', 'build', 'contracts');
    const artifacts_path = join(root_path, inner_path);
    const abi_file = format({
        root: '/ignored',
        dir: artifacts_path,
        base: 'BitgreenBridge.json'
    });
    console.log('path \t ', abi_file);
    const abi_json = JSON.parse(readFileSync(abi_file, 'utf8'));
    const abi = abi_json.abi;
    let BitgreenBridge = new web3.eth.Contract(abi, ROUTER_ADDRESS);
    return BitgreenBridge;
};
// export const subscription_contract = async (web3) => {
//     // subscribe to receive the logs:
//     console.info(`Listening for transactions to address: ${ROUTER_ADDRESS}`);
//     let __subscription = web3.eth.subscribe('logs', { address: ROUTER_ADDRESS, topics: [null] }, function (error, result) {
//         if (!error)
//             //console.log(`[Info] Notification received for address: ${result.address}. Notification: ${JSON.stringify(result)}`);
//             console.log(`[Info] Notification received for address: ${result.address}`);
//         else
//             console.error(error);
//     })
//         .on("connected", async function (subscriptionId) {
//         console.log(`[Info] Subscription activated with id: ${subscriptionId} and chainId: ${await web3.eth.getChainId()}`);
//     })
//         .on("data", await function (log) {
//         get_transaction_data(web3, log);
//     })
//         .on("changed", function (log) {
//         console.log("[Info] Changed: ", log);
//     });
// };
export const basic_evm_setup_test = async (web3, BitgreenBridge) => {
    await call_contractsumary(web3, BitgreenBridge);
    const gasPrice = await web3.eth.getGasPrice();
    await send_unsetLockdown(web3, gasPrice, BitgreenBridge);
    const account_keeper1 = web3.eth.accounts.privateKeyToAccount(keeper_pk1).address;
    const account_keeper2 = web3.eth.accounts.privateKeyToAccount(keeper_pk2).address;
    const account_keeper3 = web3.eth.accounts.privateKeyToAccount(keeper_pk3).address;
    const keepers = [
        account_keeper1,
        account_keeper2,
        account_keeper3,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000'
    ];
    await send_setKeepers(web3, gasPrice, BitgreenBridge, keepers);
    const watchdogs = [
        account_keeper1,
        account_keeper2,
        account_keeper3
    ];
    await send_setWatchdogs(web3, gasPrice, BitgreenBridge, watchdogs);
    await send_setWatchcats(web3, gasPrice, BitgreenBridge, watchdogs);
    await send_setThreshold(web3, gasPrice, BitgreenBridge, 1);
    await send_setWithDrawalFews(web3, gasPrice, BitgreenBridge, 1);
    await send_setMinimumWithDrawalFees(web3, gasPrice, BitgreenBridge, 1);
    const amount = 1000;
    // const receipt = await deposit(web3, gasPrice, BitgreenBridge, privateKey, amount, null);
    // console.log('transactionHash: \t ', receipt?.transactionHash);
    await call_contractsumary(web3, BitgreenBridge);
};
export const smoke_test = async (web3, BitgreenBridge) => {
    await call_contractsumary(web3, BitgreenBridge);
    const gasPrice = await web3.eth.getGasPrice();
    await send_unsetLockdown(web3, gasPrice, BitgreenBridge);
    const account_keeper = web3.eth.accounts.privateKeyToAccount(keeper_pk1).address;
    const keepers = [
        account_keeper,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000'
    ];
    await send_setKeepers(web3, gasPrice, BitgreenBridge, keepers);
    const watchdogs = [
        account_keeper,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000'
    ];
    await send_setWatchdogs(web3, gasPrice, BitgreenBridge, watchdogs);
    await send_setWatchcats(web3, gasPrice, BitgreenBridge, watchdogs);
    await send_setThreshold(web3, gasPrice, BitgreenBridge, 1);
    await send_setWithDrawalFews(web3, gasPrice, BitgreenBridge, 1);
    await send_setMinimumWithDrawalFees(web3, gasPrice, BitgreenBridge, 2);
    await send_setLockdown(web3, gasPrice, BitgreenBridge);
    await call_contractsumary(web3, BitgreenBridge);
    await send_unsetLockdown(web3, gasPrice, BitgreenBridge);
    await send_transferOwnership(web3, gasPrice, BitgreenBridge, privateKey, account_keeper);
    await call_contractsumary(web3, BitgreenBridge);
};
export const smoke_restore_ownership = async (web3, BitgreenBridge) => {
    const gasPrice = await web3.eth.getGasPrice();
    const account_original_address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    await call_contractsumary(web3, BitgreenBridge);
    await send_transferOwnership(web3, gasPrice, BitgreenBridge, keeper_pk1, account_original_address);
    await call_contractsumary(web3, BitgreenBridge);
};
export const smoke_transfer = async (web3, BitgreenBridge) => {
    const pk = "0x16eea8ef343d6138e563991c23a80310d8b9cbc3b9dd9e11ebdd4005d4773a1f";
    const gasPrice = await web3.eth.getGasPrice();
    const amount = 68;
    const receipt = await deposit(web3, gasPrice, BitgreenBridge, pk, amount);
    console.log('transactionHash: \t ', receipt?.transactionHash);
    const recipient = web3.eth.accounts.privateKeyToAccount(pk).address;
    const erc20 = "0x0000000000000000000000000000000000000000";
    const keeper = web3.eth.accounts.privateKeyToAccount(keeper_pk1).address;
    let balance = await web3.eth.getBalance(recipient);
    console.log(balance);
    console.log('Balance: \t %s \t %d', recipient, balance);
    balance = await web3.eth.getBalance(ROUTER_ADDRESS);
    console.log('Balance: \t %s \t %d', ROUTER_ADDRESS, balance);
    await send_transfer(web3, gasPrice, BitgreenBridge, keeper_pk1, receipt?.transactionHash, recipient, amount, erc20);
    balance = await web3.eth.getBalance(recipient);
    console.log(balance);
    console.log('Balance: \t %s \t %d', recipient, balance);
    balance = await web3.eth.getBalance(ROUTER_ADDRESS);
    console.log('Balance: \t %s \t %d', ROUTER_ADDRESS, balance);
    await call_contractsumary(web3, BitgreenBridge);
    await BitgreenBridge.methods.txvotes(receipt?.transactionHash, recipient).call()
        .then(function (result) {
        console.log('txvotes: \t ', result);
    });
    await BitgreenBridge.methods.txvotes(receipt?.transactionHash, keeper).call()
        .then(function (result) {
        console.log('txvotes: \t ', result);
    });
    await BitgreenBridge.methods.txqueue(receipt?.transactionHash).call()
        .then(function (result) {
        console.log('txqueue: \t ', result);
    });
};

