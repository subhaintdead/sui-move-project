import { DAppKitProvider, useCurrentAccount, useDAppKit } from "@mysten/dapp-kit-react";
import { ConnectButton } from '@mysten/dapp-kit-react/ui';
import { Transaction } from "@mysten/sui/transactions";
import { useState } from "react";
import { dAppKit } from "./dapp-kit";

const packageid = '0x021651c519926783a7b8fd9e162d8dd0d1c1f5c1770dbd36fa3ec4c732cd5e16';
const counterobject = '0x60f046ac970f6a24c11addf05d7fa59915b2497c8ca0caa991bb1919c112c739'


//counter uii

function counter() {
  const account = useCurrentAccount();
  const wallet = useDAppKit();
}

//creatine time