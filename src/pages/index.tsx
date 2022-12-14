import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";

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
