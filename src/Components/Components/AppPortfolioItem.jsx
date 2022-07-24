import React from "react";
import {
  Box,
  Image,
  ListItem,
  OrderedList,
  Flex,
  Text,
} from "@chakra-ui/react";
import AppButton from "./AppButton";

const AppPortfolioItem = ({
  title,
  projectName,
  list1,
  list2,
  list3,
  list4,
  src,
  dir
}) => {
  return (
    <Flex flexDir={dir} justify="space-around" align="center" h="80vh">
      <Box alignSelf="center">
        <Text
          fontSize="26px"
          fontWeight="semibold"
          color="gray.300"
          textTransform="uppercase"
          mb={5}
        >
          {title}
        </Text>
        <Text fontSize="56px" maxW="340px" lineHeight="3.2rem" mb={5}>
          {projectName}
        </Text>
        <OrderedList>
          <ListItem>{list1}</ListItem>
          <ListItem>{list2}</ListItem>
          <ListItem>{list3}</ListItem>
          <ListItem>{list4}</ListItem>
        </OrderedList>
        <Box mt={5}>
          <AppButton label="Case Study" />
        </Box>
      </Box>
      <Box justifySelf="start">
        <Image src={src} />
      </Box>
    </Flex>
  );
};

export default AppPortfolioItem;
