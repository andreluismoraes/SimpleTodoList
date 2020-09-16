import React from "react";

import { TouchableWithoutFeedback } from "react-native";

import { Container, Information } from "./style";

export default function ListItem({ data, onLongPress }) {
  return (
    <TouchableWithoutFeedback onLongPress={onLongPress}>
      <Container>
        <Information>{data.task}</Information>
      </Container>
    </TouchableWithoutFeedback>
  );
}
