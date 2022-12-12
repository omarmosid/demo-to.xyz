import { Text } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type ParaProps = {
  children?: ReactNode;
};

const Para: React.FC<ParaProps> = ({ children }) => {
  return (
    <>
      <Text fontSize="lg" pb={2}>
        {children}
      </Text>
    </>
  );
};

const P = Para;

export { P, Para };
