import React from "react";
import { HandleWrite } from "./style";

export default function Input({ placeholder, ...rest }) {
  return (
    <HandleWrite
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      {...rest}
    />
  );
}
