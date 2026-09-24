
import { createDAppKit } from '@mysten/dapp-kit-react';
import { SuiGrpcClient } from '@mysten/sui/grpc';

const endpoint = {
    testnet: 'https://fullnode.testnet.sui.io:443', //testnet-only gng, im broke
};


export const dAppKit = createDAppKit({
    networks: ['testnet'],
    createClient: (network) => new SuiGrpcClient({ network, baseUrl: endpoint[network] }),

})


