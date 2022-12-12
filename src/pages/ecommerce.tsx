import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";

const Ecommerce = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ecommerce | Demoto.xyz</title>
          <meta
            name="description"
            content="A demo app to fiddle around with ecommerce stuff"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Ecommerce" />

        <Box py={10}>
          <Button size="lg" variant="solid" colorScheme="blue" id="addToCart">
            Add to cart
          </Button>
        </Box>
      </Layout>
    </>
  );
};

export default Ecommerce;
