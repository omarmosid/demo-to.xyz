import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";

export default function Video() {
  return (
    <>
      <Layout>
        <Head>
          <title>Video | Demoto.xyz</title>
          <meta name="description" content="A demo app to fiddle around with" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Video" />

        <Box p={4}>
          <video
            id="video"
            src="https://joy.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_005_preview.mp4"
            controls
          />
        </Box>
      </Layout>
    </>
  );
}
