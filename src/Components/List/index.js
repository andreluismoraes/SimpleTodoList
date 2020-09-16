import React, { useState, useEffect, useContext } from "react";

import { Animated, TouchableOpacity, Alert } from "react-native";

import firebase from "../../server/";

import { AuthContext } from "../../Context/auth.context";

import Swipeable from "react-native-gesture-handler/Swipeable";

/** importando components */
import ListItem from "../ListItem";

import { ListContainer } from "./style";

export default function List() {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Alert.alert("Atenção", "Você realmente quer exluir esta tafera ?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          firebase.database().ref("tarefas").child(user.uid).child(id).remove();
        },
      },
    ]);
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity
        onPress={() => console.log("click")}
        style={{
          justifyContent: "center",
          backgroundColor: "red",
          marginBottom: 2,
          marginRight: 2,
        }}
      >
        <Animated.Text
          style={[
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Deletar
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  const getAllTask = () => {
    firebase
      .database()
      .ref("tarefas")
      .child(user.uid)
      .on("value", (snapshot) => {
        setData([]);
        snapshot.forEach((childItem) => {
          const list = { key: childItem.key, task: childItem.val().task };
          setData((oldTask) => [...oldTask, list]);
        });
      });
  };

  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <ListContainer
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        // <Swipeable renderLeftActions={renderLeftActions}>
        <ListItem data={item} onLongPress={() => handleDelete(item.key)} />
        //  </Swipeable>
      )}
    />
  );
}
