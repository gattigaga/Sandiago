import React from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store/store";
import Login from "./src/pages/Login";

const MainRoute = createStackNavigator({
  Login
});

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainRoute />
    </PersistGate>
  </Provider>
);

export default App;
