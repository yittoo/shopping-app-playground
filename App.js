import React, { useState } from "react";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import store from "./store/reducers";
import ShopNavigator from "./navigation/ShopNavigator";

const fetchFonts = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });

export default App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded)
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setAppLoaded(true)} />
    );

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};
