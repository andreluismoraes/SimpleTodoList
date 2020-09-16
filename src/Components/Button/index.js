import React from "react";
import { Botao, Texto } from "./style";

export default function Button({ children, onPress, ...rest }) {
  return (
    <Botao onPress={onPress} {...rest}>
      <Texto>{children}</Texto>
    </Botao>
  );
}
