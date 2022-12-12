import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Nav } from "../Nav/Nav";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <Box as="main" maxWidth="6xl" margin="0 auto" py={6} px={8}>
        {children}
      </Box>
    </>
  );
};

export { Layout };
