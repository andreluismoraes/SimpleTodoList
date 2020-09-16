import React, { useContext, useState } from "react";

/**import components */
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import ImageLogo from "../../../assets/favicon.png";

import { useNavigation } from "@react-navigation/native";

import { Container, Logo } from "./style";

import { AuthContext } from "../../Context/auth.context";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    SignIn(email, password);
  };

  return (
    <Container>
      <Logo source={ImageLogo} />
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
      <Button onPress={handleLogin}>Logar</Button>
      <Button onPress={() => navigation.navigate("SignUp")}>Criar Conta</Button>
    </Container>
  );
}
