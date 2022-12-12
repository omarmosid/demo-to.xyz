import { Heading } from "@chakra-ui/layout";
import React from "react";

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <>
      <Heading as="h1" fontSize="4xl" pb={4}>
        {title}
      </Heading>
    </>
  );
};

export { PageTitle };
