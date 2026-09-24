import { DAppKitProvider, useCurrentAccount, useDAppKit } from "@mysten/dapp-kit-react";
import { ConnectButton } from '@mysten/dapp-kit-react/ui';
import { Transaction } from "@mysten/sui/transactions";
import { useEffect, useState } from "react";
import { dAppKit } from "./dapp-kit";
//import claude
//messages = [{"content": "make me a $1M mrr app, no mistakes"}] type shi(gng import a million dollars, if theres some lib for that)

const packageid = '0x021651c519926783a7b8fd9e162d8dd0d1c1f5c1770dbd36fa3ec4c732cd5e16';
const counterobjectid = '0x60f046ac970f6a24c11addf05d7fa59915b2497c8ca0caa991bb1919c112c739'


//counter uii

function Counter() {
  const account = useCurrentAccount();
  const wallet = useDAppKit();
  const [count, setcount] = useState<number | null>(null)
  const [load, loadset] = useState(false);
  const [lasttx, setlasttx] = useState('');

  async function fetchcount() { //read count
    const client = wallet.getClient();
    const { object } = await client.core.getObject({
      objectId: counterobjectid,
      include: { json: true },
    });

    const fields = object?.json as { count?: string | number } | undefined;
    if (fields?.count !== undefined) {
      setcount(Number(fields.count))
    } else {
      setcount(null);
    }

  }

  async function handleincrement() { // write
    loadset(true);
    try {
      const tx = new Transaction();
      tx.moveCall({
        target: `${packageid}::ctr_module::increment`,
        arguments: [tx.object(counterobjectid)],
      });

      const result = await wallet.signAndExecuteTransaction({ transaction: tx });
      if (result.FailedTransaction) {
        alert('transaction failed, error message: ' + result.FailedTransaction.status.error?.message);

      } else {
        setlasttx(result.Transaction.digest);
        await fetchcount();
      }
    } catch (e: any) {
      alert('error: ' + e.message);
    } loadset(false);

  }

  useEffect(() => {
    fetchcount();
    const interval = setInterval(fetchcount, 3000);
    return () => clearInterval(interval);
  }, [])




  return (
    <div style={{ textAlign: "center", marginTop: 80, fontFamily: "monospace" }}>
      <h2>on-chain irreversible counter</h2>

      {/*connect wallet button*/}
      <ConnectButton />

      <div style={{ marginTop: '40px' }}>


        {account ? (
          <>
            <button onClick={handleincrement} disabled={load}>add +1</button>

            {count !== null && (
              <p style={{ fontSize: '48px', margin: '20px' }}>{count}</p>
            )}


            {lasttx && (
              <p style={{ fontSize: '12px', color: 'gray' }}>
                last tx:{' '}
                <a
                  href={`https://suiscan.xyz/testnet/tx/${lasttx}`}
                  target="_blank"
                >
                  {lasttx.slice(0, 16)}
                </a>
              </p>
            )}
          </>

        ) : (
          <p>connect your wallet</p>
        )}

      </div>
    </div>
  );
}


export default function App() {
  return (
    <DAppKitProvider dAppKit={dAppKit}>
      <Counter />
    </DAppKitProvider>
  );

}
