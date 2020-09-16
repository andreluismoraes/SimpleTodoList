import React, { useContext } from "react";

import { AuthContext } from "../../Context/auth.context";

import { Container, Information } from "./style";

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Information>Bem Vindo</Information>
      </Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label="Sair do App"
        inactiveBackgroundColor="#c62c36"
        onPress={() => handleSignOut()}
      />
    </DrawerContentScrollView>
  );
}
