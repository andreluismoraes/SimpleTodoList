import React from "react";

import "react-native-gesture-handler";

console.disableYellowBox = true;

import { NavigationContainer } from "@react-navigation/native";

/**import provider */
import AuthProvider from "./src/Context/auth.context";

//import Routes
import Routes from "./src/Routes/";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
