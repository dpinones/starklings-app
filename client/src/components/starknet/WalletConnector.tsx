import { useAccount, useConnect } from "@starknet-react/core";

export const WalletConnector = () => {
    const account = useAccount()

    const { connect, connectors } = useConnect();
    console.log('account', account)

/*     const connectWallet = () => {
        const connector = connect.connectors?.[0]
        connect.connect(connector)
    } */

    return account.isConnected ? <div>connected {account.address}</div> : <ul>
      {connectors.map((connector) => (
        <li key={connector.id}>
          <button onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        </li>
      ))}
    </ul>
}