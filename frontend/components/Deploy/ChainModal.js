import Image from "next/image";
import React, { useState } from "react";
import polygonSvg from "../../public/assets/deploy/polygon.svg";
import avaImg from "../../public/assets/deploy/avalanche.png";
import optimismImg from "../../public/assets/deploy/optimism.png";
import bnbImg from "../../public/assets/deploy/bnb.png";
import arbImg from "../../public/assets/deploy/arbitrium.svg";

const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="top-0 left-0 fixed bg-black/20 backdrop-blur-md h-screen w-screen"
    ></div>
  );
};

const chains = [
  {
    id: "97",
    chainImg: bnbImg,
    chainName: "BSC Testnet",
  },
  {
    id: "80001",
    chainImg: polygonSvg,
    chainName: "Polygon Mumbai",
  },
  {
    id: "43113",
    chainImg: avaImg,
    chainName: "Avalanche Fuji",
  },
  {
    id: "421613",
    chainImg: arbImg,
    chainName: "Arbitrum Goerli",
  },
  {
    id: "420",
    chainImg: optimismImg,
    chainName: "Optimism Goerli",
  },
];

const ChainModal = ({ onClose, sendData }) => {
  // const [chain, setChain] = useState(null)

  const onClick = (chain) => {
    const data = {
      chainName: chain.chainName,
      chainImg: chain.chainImg,
      chainId: chain.id,
    };
    sendData(data);
    onClose();
  };

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="w-[450px] rounded-2xl absolute top-[50%] left-[46%] shadow-md -translate-x-[50%] -translate-y-[50%] z-10 rounded-b-2xl  overflow-hidden border border-gray-800">
        <div className="bg-[#232323] pt-6 pb-10 px-4 w-full  rounded-t-2xl">
          <h2 className="text-gray-500 font-semibold">Select a Chain</h2>
        </div>
        <div className=" bg-[#151515] p-3 text-white flex flex-col gap-2 overflow-y-scroll max-h-[350px]">
          {chains.map((chain, i) => (
            <div
              onClick={() => onClick(chain)}
              className="py-3 px-3 flex gap-4 hover:bg-[#323131] cursor-pointer rounded-xl"
            >
              <Image
                src={chain.chainImg}
                alt={chain.chainName}
                width={40}
                height={40}
              />
              <div className="flex items-center">
                <h3 className="font-semibold">{chain.chainName}</h3>
                {/* <p className='text-[12px] tracking-wide text-gray-500'>{chain.chainAdd}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChainModal;
