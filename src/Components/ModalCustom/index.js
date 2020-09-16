import React, { useState, useEffect } from "react";
import { Modal } from "react-native";

/**importando components*/
import Botao from "../../Components/Button";
import Input from "../../Components/Input";

import { ModalView } from "./style";

export default function ModalCustom({ visible }) {
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <ModalView>
        <Input placeholder="Digite sua tarefa" />
        <Botao>Adicionar</Botao>
        <Botao>Fechar</Botao>
      </ModalView>
    </Modal>
  );
}
