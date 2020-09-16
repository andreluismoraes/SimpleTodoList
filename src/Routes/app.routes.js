import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

/**import Components */
import CustomDrawer from "../Components/CustomDrawer";

/**import pages */
import Home from "../Pages/Home";

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => (
  <AppDrawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={{
      backgroundColor: "#171717",
    }}
    drawerContentOptions={{
      labelStyle: {
        fontWeight: "bold",
      },
      activeTintColor: "#ffffff",
      activeBackgroundColor: "#0d47a1",
      inactiveBackgroundColor: "#000",
      inactiveTintColor: "#ddd",
      itemStyle: {
        marginVertical: 5,
      },
    }}
  >
    <AppDrawer.Screen name="Home" component={Home} />
  </AppDrawer.Navigator>
);

export default AppRoutes;
