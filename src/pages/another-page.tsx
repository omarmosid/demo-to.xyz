import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { PageTitle } from "../components/PageTitle";
import { P } from "../components/Text/Para";

export default function AnotherPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>Another Page | Demoto.xyz</title>
          <meta name="description" content="A demo app to fiddle around with" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PageTitle title="Another Page" />

        <Box>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            quis rhoncus augue, ac dignissim risus. Donec bibendum quam sed
            rutrum rhoncus. Aliquam erat magna, vestibulum vitae lectus et,
            sagittis ultricies ipsum. Vivamus bibendum eros sed pretium
            tristique. Curabitur non porttitor justo.
          </P>

          <P>
            Phasellus fermentum faucibus purus sit amet sagittis. Donec
            condimentum neque in leo laoreet, vitae tincidunt est ultricies.
            Curabitur luctus metus tincidunt urna dapibus congue. Suspendisse
            dui justo, interdum a enim rutrum, pharetra rhoncus lectus. Praesent
            eu libero nisl. Praesent bibendum convallis nunc scelerisque
            suscipit. Donec congue dolor sit amet odio dapibus viverra. Donec at
            mattis neque, a ultricies nunc.
          </P>

          <P>
            Nullam euismod, quam a eleifend imperdiet, dui mauris egestas dui,
            vel convallis tellus diam eget tellus. Nulla rutrum purus sit amet
            mauris egestas dignissim. Proin feugiat lacus ac mattis ullamcorper.
            Curabitur bibendum vitae nibh vitae maximus. Fusce feugiat viverra
            massa non facilisis. Curabitur aliquet feugiat lorem in sodales. Nam
            nisl lacus, scelerisque sit amet nunc aliquam, finibus fermentum
            urna.{" "}
          </P>

          <P>
            Mauris id sem ultrices, feugiat eros dignissim, mattis mi. Duis at
            ligula a felis faucibus porttitor. Vestibulum et sapien tristique,
            fringilla libero sed, varius diam. Nam turpis purus, mollis eu
            ultrices sollicitudin, aliquet vitae urna. Fusce sodales, diam a
            scelerisque eleifend, turpis augue rutrum magna, id faucibus velit
            neque eget nibh. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Pellentesque et laoreet
            augue.
          </P>

          <P>
            Morbi placerat lorem libero, sed tincidunt diam ornare id. Quisque
            ut placerat arcu. Aliquam commodo dui lectus, sit amet vulputate
            tellus auctor faucibus. Etiam tincidunt malesuada tortor a
            condimentum. Nam ultrices diam sed urna dictum porta. Vivamus auctor
            dignissim orci, in volutpat libero finibus eu. Morbi in porta
            tellus, at finibus risus. Suspendisse velit justo, ornare sit amet
            ultrices sed, imperdiet vel enim. Vestibulum a fringilla dui, quis
            faucibus diam. Vestibulum vel mauris sed nibh euismod venenatis sed
            in mauris. Morbi sit amet tortor non purus convallis placerat.
          </P>

          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
            ut nulla eu volutpat. Quisque pulvinar turpis quis eros ultrices
            rhoncus. Praesent aliquam erat mollis, volutpat urna nec, finibus
            tortor. Vestibulum sodales facilisis nibh eget ultrices. Fusce
            tempus arcu nec risus dignissim varius. Etiam aliquet neque vel
            tincidunt pretium. Ut non varius lorem. Ut auctor nunc massa, ac
            sodales quam dictum quis. Suspendisse facilisis aliquam justo.
          </P>

          <P>
            Donec commodo justo scelerisque libero egestas, suscipit viverra
            ligula euismod. Curabitur vel porttitor purus. Donec vulputate eros
            scelerisque metus tempor finibus. Maecenas laoreet urna enim, sit
            amet blandit libero pulvinar vel. In hac habitasse platea dictumst.
            Fusce ultrices nisi quis risus maximus, quis sagittis enim ultrices.
          </P>
        </Box>
      </Layout>
    </>
  );
}
