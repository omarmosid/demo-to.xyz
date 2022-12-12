import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { navConfig } from "./nav.config";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <>
      <Box as="nav" py={2} px={3}>
        <UnorderedList
          listStyleType="none"
          margin="0px"
          display="flex"
          gap={6}
          flexWrap="wrap"
        >
          {navConfig.map((navItem) => {
            return (
              <ListItem key={navItem.id}>
                <Link href={navItem.link}>{navItem.display}</Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </>
  );
};

export { Nav };
