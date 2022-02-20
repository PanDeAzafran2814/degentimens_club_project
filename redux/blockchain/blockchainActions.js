// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import SmartContract from "../../contracts/DC.json";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};
export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);

      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        await ethereum
          .request({
            method: "net_version",
          })
          .then((networkId) => {
            if (Number(networkId) === 4) {
              console.log("first");
              const SmartContractObj = new Web3EthContract(
                SmartContract,
                "0xE4576C806f5D39D460f70c7a63b1A1FbDE8eafF3"
              );

              dispatch(
                connectSuccess({
                  account: accounts[0],
                  smartContract: SmartContractObj,
                  web3: web3,
                })
              );
              // Add listeners start
              ethereum.on("accountsChanged", (accounts) => {
                dispatch(updateAccount(accounts[0]));
              });
              ethereum.on("chainChanged", () => {
                window.location.reload();
              });
              // Add listeners end
            } else {
              dispatch(connectFailed("Change network to Ethereum"));
            }
          });
        // const NetworkData = await SmartContract.networks[networkId];
        //mainID 1
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
