import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const AuthRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Voltar" }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
