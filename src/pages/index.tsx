import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";
import { Para } from "../components/Text/Para";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Demoto.xyz</title>
          <meta name="description" content="A demo app to fiddle around with" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Home" />

        <Para as="p" id="intro-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt USD282873022 ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Para>

        <Box py={4} height="70vh">
          <img
            src="https://media.giphy.com/media/l0IpXP8BwnMXvcOze/giphy.gif"
            alt="table flip meme"
            style={{
              height: "100%",
            }}
          />
        </Box>
      </Layout>
    </>
  );
}
