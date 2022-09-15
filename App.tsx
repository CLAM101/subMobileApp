import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavContainer from "./mainstack/mainnavcontainer";
import { useAppSelector, useAppDispatch } from "./hooks";
import {
  setOrigin,
  selectOrigin,
  setLoggedState,
  selectLoggedState
} from "./slices/navSlice";
import Login from "./authstack/login";

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider
} from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthNavContainer from "./authstack/authnavcontainer.";

const theme = {
  roundness: 30,
  version: 2,
  colors: {
    primary: "#E2DCC8",
    secondary: "#0F3D3E",
    tertiary: "#E2DCC8",
    accent: "#0F3D3E",
    text: "#0F3D3E"
  }
};

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export function App() {
  const loggedState = useAppSelector(selectLoggedState);
  const dispatch = useAppDispatch();

  return (
    <PaperProvider theme={theme}>
      {loggedState === true ? <MainNavContainer /> : <AuthNavContainer />}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
