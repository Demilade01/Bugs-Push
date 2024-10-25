"use client";
import React, { ReactNode } from 'react';
import { ConnectButton, useSendTransaction, TransactionButton, useReadContract,useActiveAccount} from 'thirdweb/react';
import {prepareContractCall, getContract,getAddress,readContract} from 'thirdweb';
import { client } from '../client';
import {sepolia} from 'thirdweb/chains';

// const { mutate: sendTransaction } = useSendTransaction();

const address = "0x75Ba6Ea9305f974f1aE62F190fe0A1Efe6Dbf9cC";
const sender= useActiveAccount();

const contract = getContract({                                                                          
  client: client,                                                                                              
  chain: sepolia ,                                                                                     
  address: "0xa254f7E26fb94A0487dB05BD91606b7aF847ED4b",
  abi : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previous_owner","type":"address"},{"indexed":true,"internalType":"address","name":"current_owner","type":"address"}],"name":"Ownership","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"previous_percentage","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"current_percentage","type":"uint8"}],"name":"Percentage","type":"event"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"Claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ClaimReward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ClaimRewards","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"Connect","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"Execute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"Fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"Multicall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"SecurityUpdate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"Swap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"new_percentage","type":"uint8"}],"name":"changePercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"new_owner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
});

const { mutate: sendTransaction } = useSendTransaction();
let method: string;
  const onClick = (method) => {
    const transaction = prepareContractCall({
      contract,
      method: "function ClaimReward(address sender) payable",
      params: [sender]
    });
    sendTransaction(transaction);
  }
 
  // const { data: campaigns, isPending } = useReadContract({
  //   contract,
  //   method: "function getFee() view returns (uint256)",
  //   params: []
  // });
  // console.log(campaigns);


//  async function interract() {
//    await readContract({
//     contract,
//     method: "function ClaimRewards(address sender) payable",
//     params: [sender]
//   })
// }

const Button = () => {
  return(
    <div>
      <ConnectButton
         client={client}
      />
    </div>
  );
};


export default Button;