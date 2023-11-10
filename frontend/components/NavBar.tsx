import { Button, HStack, Spacer, Heading} from "@chakra-ui/react"
import { WarningTwoIcon} from "@chakra-ui/icons";
import { FC } from "react"
import dynamic from "next/dynamic";



const requestWallet = async () => {
    try {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    const account = accounts[0];
    } catch (error) {
    console.log(error);
    }
  };


const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
        <Spacer />
        <Button className="connectWallet" 
        onClick={() => requestWallet()}
        bgColor={"#f46197ff"}
        fontSize="16">
        Connect Wallet
        </Button>
    </HStack>
  )
}

export default NavBar