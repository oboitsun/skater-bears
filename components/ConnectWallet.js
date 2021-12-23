import React, { useState, useRef } from "react";
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
import ComingSoonPopUp from "./ComingSoonPopUp";

function ConnectWallet({
  showPopup,
  setShowPopup,
  setUserAddress,
  header = false,
  big,
  userAddress,
  // connectWallet,
  // connectStoic,
}) {
  const connectPlugWallet = async () => {
    const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
    const whitelist = [nnsCanisterId];
    if (window.ic?.plug) {
      try {
        const isConnected = await window.ic.plug.requestConnect({
          whitelist,
        });
        console.log(isConnected);
        if (isConnected) {
          const principalId = await window.ic.plug.agent.getPrincipal();
          setUserAddress(principalId.toText());
          console.log("hola", `Plug's user principal Id is ${principalId}`);
        }
      } catch (error) {
        window.alert("connection was refused");
      }
    } else {
      window.alert("Plug Wallet not installed.");
    }
  };

  const connectStoicWallet = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        setUserAddress(identity.getPrincipal().toText());
        console.log("hola", identity.getPrincipal().toText());
      }
    } catch (error) {
      window.alert("connection was refused");
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

  const connectEarthWallet = async () => {
    await injectEarth();
    let account = await window.earth.enable();
    if (account) {
      console.log("hola", "Successfully connected to Earth Wallet 🌍", account);
      setUserAddress(account);
    } else {
      window.alert("connection was refused");
    }
  };

  return (
    <ChakraProvider>
      <div className="flex items-center">
        {!userAddress ? (
          <Popover>
            <PopoverTrigger>
              <Button className="cnct-wallet">
                <span
                  className={`${
                    big ? " px-8 py-4" : "px-4"
                  } border-white border   group  text-white leading-none font-bold text-sm lg:text-base py-2  flex items-center justify-center rounded-[10px] box-content transitions-all duration-[0.4s]`}
                >
                  Connect Wallet
                  <svg
                    className="fill-current transform transition-transform group-hover:bounce-x ml-2.5"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 8.4875V4C18.75 3.83424 18.6842 3.67527 18.5669 3.55806C18.4497 3.44085 18.2908 3.375 18.125 3.375H17.5V1.5C17.5 1.16848 17.3683 0.850537 17.1339 0.616116C16.8995 0.381696 16.5815 0.25 16.25 0.25H1.25C0.918479 0.25 0.600537 0.381696 0.366117 0.616116C0.131696 0.850537 0 1.16848 0 1.5L0 17.75C0 17.9158 0.065848 18.0747 0.183058 18.1919C0.300269 18.3092 0.45924 18.375 0.625 18.375H18.125C18.2908 18.375 18.4497 18.3092 18.5669 18.1919C18.6842 18.0747 18.75 17.9158 18.75 17.75V13.2625C19.1147 13.1336 19.4306 12.895 19.6544 12.5794C19.8782 12.2639 19.9989 11.8868 20 11.5V10.25C19.9989 9.86316 19.8782 9.48612 19.6544 9.17058C19.4306 8.85504 19.1147 8.61645 18.75 8.4875ZM1.25 1.5H16.25V3.375H1.25V1.5ZM17.5 17.125H1.25V4.625H17.5V8.375H13.125C12.6277 8.375 12.1508 8.57254 11.7992 8.92417C11.4475 9.27581 11.25 9.75272 11.25 10.25V11.5C11.25 11.9973 11.4475 12.4742 11.7992 12.8258C12.1508 13.1775 12.6277 13.375 13.125 13.375H17.5V17.125ZM18.75 11.5C18.75 11.6658 18.6842 11.8247 18.5669 11.9419C18.4497 12.0592 18.2908 12.125 18.125 12.125H13.125C12.9592 12.125 12.8003 12.0592 12.6831 11.9419C12.5658 11.8247 12.5 11.6658 12.5 11.5V10.25C12.5 10.0842 12.5658 9.92527 12.6831 9.80806C12.8003 9.69085 12.9592 9.625 13.125 9.625H18.125C18.2908 9.625 18.4497 9.69085 18.5669 9.80806C18.6842 9.92527 18.75 10.0842 18.75 10.25V11.5Z"
                      fill="current"
                    />
                  </svg>
                </span>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent className="pop-over">
                <PopoverBody>
                  <Button className="wallet-connect-button" onClick={connectPlugWallet}>
                    <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with
                    Plug
                  </Button>
                  <div className="spacer" />
                  <Button className="wallet-connect-button" onClick={connectStoicWallet}>
                    <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect with
                    Stoic
                  </Button>
                  <div className="spacer" />
                  <Button className="wallet-connect-button" onClick={connectEarthWallet}>
                    <img className="icon-logo" src="/imgs/earth-logo.jpg" /> Connect with
                    Earth
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        ) : (
          <div className="text-white text-xs font-normal flex flex-col items-center justify-start">
            {header && (
              <p
                onClick={() => setUserAddress("")}
                className="pb-1"
              >{`${userAddress.slice(0, 8)}...${userAddress.slice(-6)}`}</p>
            )}
            <CWalletButton
              onClick={() => {
                setShowPopup(true);
              }}
              text="Mint NFT"
              spcng="px-9"
              icon={false}
              type="filled"
            />
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}

export default ConnectWallet;
