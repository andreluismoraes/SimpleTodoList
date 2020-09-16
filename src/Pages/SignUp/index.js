import React, { useContext, useState } from "react";

/**import components */
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import ImageLogo from "../../../assets/favicon.png";

import { Container, Logo } from "./style";

import { AuthContext } from "../../Context/auth.context";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { SignUp } = useContext(AuthContext);

  const handleLogin = () => {
    SignUp(name, email, password);
  };

  return (
    <Container>
      <Logo source={ImageLogo} />
      <Input
        placeholder="Digite seu nome"
        onChangeText={(name) => setName(name)}
      />
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button onPress={() => handleLogin()}>Criar</Button>
    </Container>
  );
}
