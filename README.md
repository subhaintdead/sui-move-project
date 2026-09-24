# on-chain irreversible counter

this is a counter where you can add +1 to the previous number. it's irreversible, 
so the number only goes up, just like you age
## features

- smart contract that adds 1 to the previous number

- the counter itself is a shared object so all can update it

- connect wallet

- hardcoded on testnet

- irreversible cuz it doesnt have a way to decrement(hardcoded)

- unspoofable(yes i ran out of words)


## how to use

just open it in your browser:

https://frontend-brown-phi-64.vercel.app/

connect your wallet(preferably slush)

before that make sure youre on testnet and can pay for the gas fees

after you connect your wallet and sign the connection, you click "add +1" and then sign the transaction

then you see the updated count

if youre a nerd, you can click the suiscan link to see what exactly happened

## how to reproduce it locally

copy the commands: 
```bash
git clone https://github.com/subhaintdead/sui-move-project
cd sui-move-project/suistuff
sui move build
```
the above script just builds it and tells if its all good or not, later you `sui client publish --gas-budget <GAS-AMOUNT>` and then get the PACKAGE_ID and the OBJECT_ID of the counter, put it in your app file(or you can modify the frontend) and uh do npm run dev

## dependencies(to do it locally)

make sure you have vite, rust/cargo, sui move installed (refer to https://docs.sui.io/guides/developer/getting-started/sui-install for more detailed talk on how to install sui cli)


<br>
<br>
<br>
<br>
(if this feels clunky to you, it is)

learning material: mysten's demos and docs
