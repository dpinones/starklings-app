import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { useConnect } from "@starknet-react/core";
import { WalletButton } from "./WalletButton";

interface IConnectWalletDrawerProps {
  open: boolean;
  handleClose: () => void;
}

export const ConnectWalletDrawer = ({
  open,
  handleClose,
}: IConnectWalletDrawerProps) => {
  const { connectors, pendingConnector } = useConnect();

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 380 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Typography variant="h5">Connect wallet</Typography>
          <CloseIcon
            onClick={handleClose}
            sx={{ fontSize: 22, cursor: "pointer" }}
          />
        </Box>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", p: 3, gap: 3 }}>
          <Box sx={{ borderBottom: "1px solid black" }}>
            {connectors.map((connector) => (
              <WalletButton
                key={connector.id}
                connector={connector}
                handleClose={handleClose}
              />
            ))}
          </Box>
          <Box>
            <Typography sx={{ mb: 2 }} variant="body2">
              By connecting your wallet, you will be able to claim an
              NFT that proofs you have completed successfully all the
              Starklings exercises.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
