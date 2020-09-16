import React, { useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../Context/auth.context";

/**importando components */
import List from "../../Components/List";
import Botao from "../../Components/Button";
import Header from "../../Components/Header";

import { BackGround, Container, Welcome, Information } from "./style";

export default function Home() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const handleAddTask = () => {
    navigation.navigate("AddTask");
  };

  return (
    <BackGround>
      <Header />
      <Container>
        <Welcome>Bem vindo, {user.name}</Welcome>
        <Information>Lista de tarefas</Information>
        <List />
        <Botao onPress={handleAddTask}>Adicionar Tarefa</Botao>
      </Container>
    </BackGround>
  );
}
