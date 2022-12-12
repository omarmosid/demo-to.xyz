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
      </Layout>
    </>
  );
}
