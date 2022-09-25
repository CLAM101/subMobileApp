import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./signup";
import Login from "./login"
import { NavigationContainer } from "@react-navigation/native";
import StartOrder from "../orderstack/ordernavcontainer";
import LoadAnimation from "./loadanimation";
import MainNavContainer from "../mainstack/mainnavcontainer";

const { Navigator, Screen } = createStackNavigator();

const AuthNavContainer: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen
          name="Login"
          component={Login}
        />
        <Screen
          name="Signup"
          component={Signup}
        />
        <Screen
          name="MainNavContainer"
          component={MainNavContainer}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavContainer;