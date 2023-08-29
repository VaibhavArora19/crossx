import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { GiBreakingChain } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import bnb from "../../public/assets/deploy/bnb.png";
import ChainModal from "./ChainModal";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useNetwork, useSwitchNetwork } from "wagmi";
import DeployModal from "./DeployModal";

import {
  polygonMumbai,
  scrollTestnet,
  filecoinHyperspace,
  gnosisChiado,
  optimismGoerli,
  zkSyncTestnet,
} from "wagmi/chains";
import { Mantle } from "@/constants";

const SelectChain = ({ setPage, page, formData, setFormData }) => {
  const { chain: connectChain } = useNetwork();
  const [showCompileModal, setShowCompileModal] = useState(false);

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const [isMultichain, setIsMultichain] = useState(false);
  const [isSinlgeChain, setIsSingleChain] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [chain, setChain] = useState({
    chainId: "97",
    chainName: "BSC Testnet",
    chainImg: bnb,
  });

  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
  const { account, isConnected } = useAccount();

  const connectWalletHandler = async () => {
    try {
      await open();
    } catch (err) {
      console.log(err, "wallet  connected");
    }
  };

  useEffect(() => {
    if (connectChain) {
      if (connectChain.name !== chain.chainName) {
        switchNetwork(Number(chain.chainId));
      }
    }
  }, [connectChain, chain]);

  const sendChain = (chain) => {
    setChain(chain);
    console.log(chain);
  };

  const multichainHandler = () => {
    setIsSingleChain(false);
    setIsMultichain(true);
  };

  const singleChainHandler = () => {
    setIsMultichain(false);
    setIsSingleChain(true);
  };

  const nextPageHandler = () => {
    if (chain.chainName.length) {
      setFormData({ ...formData, currentDeployChain: chain });
    }

    if (isSinlgeChain) {
      setShowCompileModal(true);
    } else if (isMultichain) {
      setPage((currPage) => currPage + 1);
    } else {
      alert("Select single or multiple");
    }
  };

  const previousPageHandler = () => {
    setPage((currPage) => currPage - 1);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="text-white w-[550px] bg-[#1E1E1E] py-10 px-10 rounded-2xl border border-gray-700">
      <h2 className="text-2xl font-semibold mb-7">Select Chains</h2>

      <form className="flex flex-col ">
        <p className="text-sm text-gray-400 mb-1">Deploy From</p>

        <div
          className="py-3 px-3 border border-gray-700 rounded-md flex justify-between mb-6 hover:bg-[#272626] cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <div className="flex gap-2">
            <Image src={bnb} alt={bnb} width={40} height={40} />

            <div className="flex items-center">
              <h3 className="font-semibold ml-2">BSC Testnet</h3>
            </div>
          </div>

          <div className="ml-7 flex flex-col items-center justify-center bg-[#2E2E2E] px-2 rounded-md">
            <MdKeyboardArrowUp size={20} />
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-2">Deploy type</p>

        <div className="flex gap-4">
          <div
            onClick={singleChainHandler}
            className={` ${
              isSinlgeChain ? "bg-[#22335F]" : "bg-[#363636]"
            }  p-10 rounded-xl flex-[0.5] cursor-pointer`}
          >
            <div className="bg-[#171717] rounded-md p-4 w-fit mb-7">
              <GiBreakingChain
                className={`${isSinlgeChain && "text-blue-300"}`}
                size={20}
              />
            </div>

            <p className={`${isSinlgeChain && "text-blue-300 "} font-medium`}>
              Single Chain
            </p>
          </div>

          <div
            onClick={multichainHandler}
            className={` ${
              isMultichain ? "bg-[#1F423A]" : "bg-[#363636]"
            } p-10 rounded-xl flex-[0.5] cursor-pointer`}
          >
            <div className="bg-[#171717] rounded-md p-4 w-fit mb-7">
              <GiBreakingChain
                size={20}
                className={`${isMultichain ? "text-green-400" : ""}`}
              />
            </div>
            <p
              className={`${isMultichain ? "text-green-400" : ""} font-medium`}
            >
              Multi Chain
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={previousPageHandler}
            type="button"
            className="py-3 px-7 rounded-md bg-[#292929] text-gray-300 border border-gray-600"
          >
            Back
          </button>

          {!isConnected ? (
            <button
              onClick={connectWalletHandler}
              type="button"
              className="py-3 px-7 rounded-md bg-[#292929] text-gray-300 border border-gray-600"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={nextPageHandler}
              type="button"
              className="py-3 px-7 rounded-md bg-[#292929] text-gray-300 border border-gray-600"
            >
              Next
            </button>
          )}
        </div>
      </form>

      {openModal && (
        <ChainModal sendData={sendChain} onClose={closeModalHandler} />
      )}
      {showCompileModal && (
        <DeployModal
          onClose={closeModalHandler}
          // bytecode={bytecode}
          // abi={abi}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default SelectChain;
