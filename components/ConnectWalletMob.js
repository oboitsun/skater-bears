import React, { useState } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import CWalletButton from "./Button";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  ChakraProvider,
} from "@chakra-ui/react";

function ConnectWalletMob({ header, userAddress, setUserAddress }) {
  // const [userAddress, setUserAddress] = useState("");

  const connectWallet = async () => {
    if (window) {
      // Canister Ids
      const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";

      // Whitelist
      const whitelist = [nnsCanisterId];

      // Make the request
      const isConnected =
        window &&
        (await window.ic.plug.requestConnect({
          whitelist,
        }));

      // Get the user principal id
      const principalId = window && (await window.ic.plug.agent.getPrincipal());

      setUserAddress(principalId.toText());

      console.log(`Plug's user principal Id is ${principalId}`);
    }
  };

  const connectStoic = async () => {
    if (window) {
      await StoicIdentity.load();
      let identity = await StoicIdentity.connect();
      setUserAddress(identity.getPrincipal().toText());
      console.log(identity.getPrincipal().toText());
    }
  };

  const eventCallback = (resolve) => {
    if (window.earth) {
      resolve(window.earth);
      window.removeEventListener("load", eventCallback(resolve));
    } else {
      window.alert("Earth Wallet not installed.");
      window.removeEventListener("load", eventCallback);
    }
  };

  const injectEarth = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", eventCallback(resolve));
      const event = new Event("load");
      window.dispatchEvent(event);
    });
  };

  return (
    <ChakraProvider>
      <div className="connect-wallet">
        {!userAddress ? (
          <>
            <Button className="wallet-connect-button" onClick={connectWallet}>
              <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect
              with Plug
            </Button>
            <div className="spacer" />
            <Button className="wallet-connect-button" onClick={connectStoic}>
              <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect
              with Stoic
            </Button>
            <div className="spacer" />
            <Button className="wallet-connect-button" onClick={connectStoic}>
              <img className="icon-logo" src="/imgs/earth-logo.jpg" /> Connect
              with Earth
            </Button>
          </>
        ) : (
          <div className="text-white text-xs font-normal flex flex-col items-center justify-start">
            {header && (
              <p
                // onClick={() => setUserAddress("")}
                className="pb-1"
              >{`${userAddress.slice(0, 8)}...${userAddress.slice(-6)}`}</p>
            )}
            <button
              onClick={() => {
                setShowPopup(true);
              }}
              className="bg-black rounded-lg text-white px-4 py-2"
            >
              Mint NFT{" "}
            </button>
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}

export default ConnectWalletMob;
