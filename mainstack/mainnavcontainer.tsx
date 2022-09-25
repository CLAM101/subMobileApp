import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../authstack/signup";
import Home from "./home";
import { NavigationContainer } from "@react-navigation/native";
import StartOrder from "../orderstack/ordernavcontainer";
import LoadAnimation from "./loadanimation";
import Rankings from "./rankings";
import Profile from "./profile";
import OrderNavContainer from "../orderstack/ordernavcontainer";

const { Navigator, Screen } = createStackNavigator();

const MainNavContainer: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="OrderNavCntainer"
          component={OrderNavContainer}
        />
        <Screen
          name="Profile"
          component={Profile}
        />
        <Screen
          name="Rankings"
          component={Rankings}
        />
        <Screen
          name="LoadAnimation"
          component={LoadAnimation}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavContainer;
