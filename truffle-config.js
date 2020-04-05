require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan razor toss social idea enroll fortune sorry'; 
let testAccounts = [
"0xb3800178c80da69e11bec9234cd7f987dec9a519c0bdefa27374200444d6df0d",
"0x22444da95139404b2c19409a73772cbe8e74be59e6473b644acb34ea13c9b457",
"0x5e51c2291efe8156707fb4e28bb8e9e4905a359eed260e13a06b3ecad9f147c4",
"0xd14858a644f72bd5e640e356375589a1ee7e972d9a58e82e11ec317f5b381d52",
"0xfa2d50c3c55fbf733469d23332e4978b0178e0486b128ed798d39400c9406abb",
"0x522efb68377781fac66b8fafa274c187063bb16f16d6fc4c641d6f422f01ff25",
"0x42d5c8e039ee83cf918222787270b62098b5128da0e946cde42560ef23f2e432",
"0x961812a9502ec76fda419b75f50399b151403c5b17d17718cb4fb9aa75d2e835",
"0xb4af59ee3a75d2d23cca4d5ebc964a3baf3ff5985ee0f4ea5a4fcd06589f07b7",
"0xe3d2a0f636b95c60b26fd70b8bc0d71878d2b36199bfd056e8219b21eb45e1c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
