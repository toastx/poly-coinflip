import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import NavBar from "@/components/NavBar"
import StartPage from "@/components/StartPage"
import Footer from "@/components/Footer"
import FlipPage from "@/components/FlipPage"

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>PolyCoinFlip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />
          <Spacer />
          <Center>
            <StartPage />
          </Center>
          <Spacer />

          <Center>
            <Footer />
          </Center>
        </Stack>
      
    </div>
  )
}

export default Home