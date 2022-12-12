import { Button, Flex } from "@chakra-ui/react";
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

        <Flex py={10} gap={6}>
          <Button size="lg" variant="solid" colorScheme="blue" id="addToCart">
            Add to cart
          </Button>
          <Button size="lg" variant="solid" colorScheme="green" id="checkout">
            Checkout
          </Button>
          <Button size="lg" variant="solid" colorScheme="orange" id="buyNow">
            Buy Now
          </Button>
        </Flex>
      </Layout>
    </>
  );
};

export default Ecommerce;
