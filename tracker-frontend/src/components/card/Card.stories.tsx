import {
  Box,
  Center,
  chakra,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { Card } from ".";
import { StoryRoot } from "../../../.storybook/StoryRoot";
import todoDone from "./todo-done.svg";
import todoOpen from "./todo-open.svg";

export default {
  title: "component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const EmptyCard = () => {
  return (
    <StoryRoot>
      <Center width="100%">
        <Flex width="300px" height="200px">
          <Card />
        </Flex>
      </Center>
    </StoryRoot>
  );
};

export const TodoCard = () => {
  return (
    <StoryRoot>
      <Center width="100%">
        <Flex width="300px" height="200px">
          <Card>
            <VStack align="start">
              <VStack align="start" spacing={0}>
                <Text fontSize="lg" color="white" fontWeight="semibold">
                  Create figma mock
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800">
                  Tracker app
                </Text>
              </VStack>
              <VStack align="start" spacing={3}>
                <HStack>
                  <img src={todoDone} alt="todo-done" />{" "}
                  <Center>
                    <Text
                      fontSize="md"
                      color="white"
                      lineHeight="15px"
                      h="11px"
                      textDecoration="line-through"
                    >
                      Design layout
                    </Text>
                  </Center>
                </HStack>
                <HStack>
                  <img src={todoOpen} alt="todo-open" />{" "}
                  <Center>
                    <Text
                      fontSize="md"
                      color="white"
                      lineHeight="15px"
                      h="11px"
                    >
                      Design home page
                    </Text>
                  </Center>
                </HStack>
              </VStack>
            </VStack>
          </Card>
        </Flex>
      </Center>
    </StoryRoot>
  );
};
