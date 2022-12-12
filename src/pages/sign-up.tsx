import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";

const SignUp = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Sign up | Demoto.xyz</title>
          <meta name="description" content="A demo app to fiddle around with" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Form Page" />

        <Box pt={10} maxW="xl">
          <Text pb={4}>Sign up for an account</Text>
          <form id="signup-form">
            <VStack gap={4}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>

              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" />
              </FormControl>

              <Button
                id="sign-up"
                colorScheme="facebook"
                variant="solid"
                type="submit"
                width="full"
              >
                Sign Up
              </Button>
            </VStack>
          </form>
        </Box>
      </Layout>
    </>
  );
};

export default SignUp;
