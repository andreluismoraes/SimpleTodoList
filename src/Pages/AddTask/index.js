import React, { useState, useContext } from "react";

/**importando components */
import Botao from "../../Components/Button";
import Input from "../../Components/Input";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../Context/auth.context";

import { BackGround, Container, Information } from "./style";

export default function AddTask() {
  const [task, setTask] = useState("");
  const { addTask } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleAddTask = () => {
    addTask(task);
    navigation.navigate("Home");
  };

  return (
    <BackGround>
      <Container>
        <Information>Adicionar Tarefas</Information>
        <Input
          placeholder="Adicione uma tarefa"
          onChangeText={(task) => setTask(task)}
        />
        <Botao onPress={() => handleAddTask()}>Adicionar Tarefa</Botao>
      </Container>
    </BackGround>
  );
}
