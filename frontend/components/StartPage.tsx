import { Button, HStack, Spacer, VStack, Heading, Container,Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";
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


const StartPage: FC = () => {
    return (
        <Container>
          <VStack spacing={8}>
            <Heading
              color="#f46197ff"
              as="h1"
              size="3xl"
              noOfLines={4}
              textAlign="center"
            >
              POLY COINFLIP
            </Heading>
            <Heading
              color="#fffdf7ff"
              as="h2"
              size="2xl"
              noOfLines={3}
              textAlign="center"
            >       
              Win Matic in just a click
            </Heading>
            
            <HStack spacing={20}>
            <Button
              bgColor="#f46197ff"
              color="#fffdf7ff"
              maxW="380px"
              onClick={() => requestWallet()}
            >
              <HStack>
                <Text>Dive In</Text>
                <ArrowForwardIcon />
              </HStack>
            </Button>
            
            </HStack>
            </VStack>
          
        </Container>
      )
}

export default StartPage