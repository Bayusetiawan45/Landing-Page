import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AppButton from "./Components/AppButton";

const WorkFlow = () => {
  return (
    <Stack px="4rem" py="5rem" flexDir="column" id="workFlow">
      <Heading textTransform="uppercase" fontWeight="400" fontSize="7xl" mb={5} textAlign={{base:"center", lg:"start"}}>
        WORKFLOW
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <Box>
          <Text fontSize="18px" mb={10}>
            It is particularly important for us that you as a customer are
            actively involved in creative processes and that you know at all
            times which step we are about to take next. Learn more about our
            workflow and our communication with you as a customer here.
          </Text>
          <Image src="./4.png" />
        </Box>
        <Stack spacing={10}>
          <Text fontSize="26px" fontWeight="700" textTransform="uppercase">
            How we deal with projects from start to finish
          </Text>
          <Text fontSize="18px">
            The key to successful collaboration and results that are perfectly
            tailored to you is clear goal setting and the elimination of
            misunderstandings.
          </Text>
          <Text fontSize="18px">
            Before each project, we therefore obtain detailed information from
            you about what you expect from our service, what your goals are and
            what you particularly value. Our experts will also be happy to
            advise you on this step with their extensive specialist knowledge
          </Text>
          <Text fontSize="18px">
            As soon as your expectations have been clarified, we get down to
            work. We actively involve you, the customer, in the processes so
            that you always know where your project currently stands.
          </Text>
          <Box>
            <AppButton label="Learn More" />
          </Box>
          <Text fontSize="26px" textTransform="uppercase" textDecoration="underline">
            How we communicate with the client
          </Text>
          <Text fontSize="26px" textTransform="uppercase" textDecoration="underline">
            Stages of the process
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default WorkFlow;
