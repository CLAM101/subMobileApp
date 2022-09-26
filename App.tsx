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
<<<<<<< HEAD
  MD3LightTheme as DefaultTheme,
=======
   
>>>>>>> 8465a4c8fbcb48c20ad13589e0784679920e0c53
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
<<<<<<< HEAD
      <App />
=======
      <App/>
>>>>>>> 8465a4c8fbcb48c20ad13589e0784679920e0c53
    </Provider>
  );
}

<<<<<<< HEAD
export function App() {
=======
export  function App() {
>>>>>>> 8465a4c8fbcb48c20ad13589e0784679920e0c53
  const loggedState = useAppSelector(selectLoggedState);
  const dispatch = useAppDispatch();

  return (
    <PaperProvider theme={theme}>
<<<<<<< HEAD
      {loggedState === true ? <MainNavContainer /> : <AuthNavContainer />}
=======
      {loggedState === true ? <MainNavContainer/> :
      <AuthNavContainer/>}
>>>>>>> 8465a4c8fbcb48c20ad13589e0784679920e0c53
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
