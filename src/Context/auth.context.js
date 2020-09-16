import React, { createContext, useState } from "react";

import firebase from "../server";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);

  /**logando usuario */
  const SignIn = async (email, password) => {
    const value = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const snapshot = await firebase
      .database()
      .ref("users")
      .child(value.user.uid)
      .once("value");

    const data = {
      uid: value.user.uid,
      email: value.user.email,
      name: snapshot.val().name,
    };
    setUser(data);
  };

  /**cadastrar usuario */
  const SignUp = async (name, email, password) => {
    const newUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    //inserindo dados do usuario
    firebase
      .database()
      .ref("users")
      .child(newUser.user.uid)
      .set({ name: name });

    //coletando os dados e colocando na variavel user
    const dados = {
      uid: newUser.user.uid,
      name: name,
    };

    setUser(dados);
  };

  const signOut = () => {
    firebase.auth().signOut();
    setUser("");
  };

  const addTask = async (task) => {
    const Key = firebase.database().ref("tarefas").child(user.uid).push().key;

    firebase.database().ref("tarefas").child(user.uid).child(Key).set({
      task: task,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        setSigned,
        SignUp,
        addTask,
        SignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
