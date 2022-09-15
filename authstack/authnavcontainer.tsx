import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./signup";
import Login from "./login";
import { NavigationContainer } from "@react-navigation/native";
import StartOrder from "../orderstack/ordernavcontainer";
import LoadAnimation from "./loadanimation";
import MainNavContainer from "../mainstack/mainnavcontainer";
import { setLoggedState, selectLoggedState } from "../slices/navSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import AppHeader from "../globals/appheader";

const { Navigator, Screen } = createStackNavigator();

const AuthNavContainer: React.FunctionComponent = () => {
  const loggedState = useAppSelector(selectLoggedState);
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Screen
          name="Login"
          component={Login}
        />
        <Screen
          name="Signup"
          component={Signup}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavContainer;
