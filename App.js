import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "./src/pages/Login";

const MainRoute = createStackNavigator({
  Login
});

const App = () => <MainRoute />;

export default App;
