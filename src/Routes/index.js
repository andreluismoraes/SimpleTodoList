import React, { useContext } from "react";

import AuthRoutes from "./auth.routes";
import UserRoutes from "./user.routes";

import { AuthContext } from "../Context/auth.context";

const Routes = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <UserRoutes /> : <AuthRoutes />;
};

export default Routes;
