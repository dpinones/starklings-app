import { Connector, useConnect } from "@starknet-react/core";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

const CONNECTED_WALLET = "CONNECTED_WALLET";

interface IStarknetProviderProps {
  children: ReactNode;
}

interface IStarknetContext {
  connectedConnector: Connector | undefined;
  setConnector: (connector: Connector | undefined) => void;
}

export const StarknetContext = createContext<IStarknetContext>({
  setConnector: (_) => {},
  connectedConnector: undefined,
});

export const useStarknetContext = () => useContext(StarknetContext);

export const StarknetProvider = ({ children }: IStarknetProviderProps) => {
  const { connectors } = useConnect();
  const connectedWallet = window.localStorage.getItem(CONNECTED_WALLET);
  const foundConnector = connectors.find(
    (connector) => connector.id === connectedWallet
  );
  const [connectedConnector, setConnectedConnector] = useState<
    Connector | undefined
  >(foundConnector);

  const value = useMemo(
    () => ({
      setConnector: (connector: Connector | undefined) => {
        setConnectedConnector(connector);
        connector
          ? window.localStorage.setItem(CONNECTED_WALLET, connector.id)
          : window.localStorage.removeItem(CONNECTED_WALLET);
      },
      connectedConnector: connectedConnector,
    }),
    [setConnectedConnector, connectedConnector]
  );

  return (
    <StarknetContext.Provider value={value}>
      {children}
    </StarknetContext.Provider>
  );
};
