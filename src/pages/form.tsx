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

export default function Form() {
  return (
    <>
      <Layout>
        <Head>
          <title>Form Page | Demoto.xyz</title>
          <meta name="description" content="A demo app to fiddle around with" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Form Page" />

        <Box pt={10} maxW="xl">
          <Text pb={4}>Please fill in the form below</Text>
          <form>
            <VStack gap={4}>
              <FormControl>
                <FormLabel>Your name</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>

              <FormControl>
                <FormLabel>Your Message</FormLabel>
                <Textarea
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
              </FormControl>

              <Button
                id="submit"
                colorScheme="purple"
                variant="solid"
                type="submit"
                width="full"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Layout>
    </>
  );
}
