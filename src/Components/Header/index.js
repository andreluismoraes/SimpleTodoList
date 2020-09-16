import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { HeaderView, Today } from "./style";

export default function Header() {
  const dia = new Date();

  const navigation = useNavigation();
  const [todayDate, setTodayDate] = useState(
    dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear()
  );
  return (
    <HeaderView>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="md-apps" size={32} color="#ffffff" />
      </TouchableOpacity>
      <Today>{todayDate}</Today>
    </HeaderView>
  );
}
