import { Box,Link} from "@chakra-ui/react"
import { FC } from "react"
import dynamic from "next/dynamic";
import { ethers } from "ethers";
import { useState } from "react";
import { contractAddress, contractABI } from "@/constants";

const choice = 0;
const flipAmount = 0.1;
const contractAbi = contractABI;
const address = contractAddress;

async function coinflip(choice:number) {
    if (window.ethereum) {
        let provider = new ethers.BrowserProvider(window.ethereum);

        let signer = await provider.getSigner();
        const coinflipContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
        );
        const transaction = await coinflipContract.flip(
        choice
        { value: ethers.parseEther(flipAmount.toString()) }
        );
        console.log(transaction.hash);
        alert("Flipping");

        const result = await transaction.wait();
        console.log(result);
        if (result != "undefined") {
        alert(result);
        }
    } else {
        console.error("Metamask is not installed in the browser");
    }
}
const FlipPage: FC = () => {
  return (
    <Box marginBottom={4} color="#fffdf7ff" fontSize="xl" fontWeight={"bold"} >
        Built by
        <Link
        paddingLeft={1}
        href="https://github.com/toastx"
        target="_blank"
        rel="noopener noreferrer"
        color="gold" 
      >
        Toastx
      </Link>
    </Box>
  )
}

export default FlipPage