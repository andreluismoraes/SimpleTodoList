import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//routes
import AppRoutes from "./app.routes";
import AddTask from "../Pages/AddTask";

const UserRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: "Voltar" }}
      />
    </Stack.Navigator>
  );
};

export default UserRoutes;
