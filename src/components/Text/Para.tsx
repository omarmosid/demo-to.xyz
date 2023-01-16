import { Text, TextProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type ParaProps = {
  children?: ReactNode;
} & TextProps;

const Para: React.FC<ParaProps> = ({ children, ...rest }) => {
  return (
    <>
      <Text fontSize="lg" pb={2} {...rest}>
        {children}
      </Text>
    </>
  );
};

const P = Para;

export { P, Para };
