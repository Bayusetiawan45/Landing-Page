import { AddIcon, ExternalLinkIcon, MinusIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppButton from "./AppButton";

const AppAccordion = ({ Title, Description, Item }) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={5}>
                <SimpleGrid columns={[1, null, 2]} spacing="40px">
                  <Box fontSize="26px" textTransform="uppercase">
                    {Title}
                  </Box>
                  <Flex pr={10}>
                    <Text fontSize="18px">{Description}</Text>
                    <Box ml={5}>
                     <AppButton label="Learn More"/>
                    </Box>
                  </Flex>
                </SimpleGrid>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="20px" />
              ) : (
                <AddIcon fontSize="20px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SimpleGrid columns={[1, null, 2]} spacing="40px">
              <Box>
                <Image src="./1.png" />
              </Box>
              <Stack>
                <HStack>
                  <Image maxW="22rem" src="./3.png" />
                  <Image maxW="22rem" src="./2.png" />
                </HStack>
                <Text fontSize="18px">{Item}</Text>
              </Stack>
            </SimpleGrid>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default AppAccordion;
