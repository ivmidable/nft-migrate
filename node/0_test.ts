import { CosmWasmClient, SigningCosmWasmClient, Secp256k1HdWallet, GasPrice, Coin } from "cosmwasm";

import * as fs from 'fs';
import axios from 'axios';


const rpcEndpoint = "https://rpc.uni.juno.deuslabs.fi";

const config = {
    chainId: "uni-3",
    rpcEndpoint: rpcEndpoint,
    prefix: "juno",
};

const nft_wasm = fs.readFileSync("../artifacts/nft.wasm");
const sender = "juno10c3slrqx3369mfsr9670au22zvq082jaej8ve4";

const mnemonic =
    "test peanut elevator motor proud globe obtain gasp sad balance nature ladder";

async function setupClient(): Promise<SigningCosmWasmClient> {
    let gas = GasPrice.fromString("0.025ujunox");
    let wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'juno' });
    let client = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet, { gasPrice: gas });
    return client;
}

describe("Cosmwasm Template Tests", () => {
    xit("Generate Wallet", async () => {
        let wallet = await Secp256k1HdWallet.generate(12);
        console.log(wallet.mnemonic);
    });

    xit("Get Testnet Tokens", async () => {
        let wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'juno' });
        //console.log(await wallet.getAccounts());
        try {
            let res = await axios.post("https://faucet.uni.juno.deuslabs.fi/credit", { "denom": "ujunox", "address": "juno10c3slrqx3369mfsr9670au22zvq082jaej8ve4" });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }).timeout(10000);


    //build the NFT contract by running "cargo run-script optimize"

    xit("Upload NFT to testnet twice", async () => {
        //upload NFT contract to testnet twice and get two code_id's
        let client = await setupClient();

    }).timeout(100000);

    xit("Instantiate NFT on testnet", async () => {
        //instantiate a NFT contract on the testnet with one of the code_id's
        //get the contract address after instantiation.
        //make sure you supply a admin address.
        let code_id = 0;
        let client = await setupClient();

    }).timeout(100000);

    xit("Mint on testnet", async () => {
        //using contract address mint a NFT on the testnet.
        let client = await setupClient();

    }).timeout(100000);

    xit("Migrate NFT contract on testnet", async () => {
        //using the contract address migrate the NFT contract to the second code_id
        //then verify the minted NFT still exists.
        let client = await setupClient();

    }).timeout(100000);

});