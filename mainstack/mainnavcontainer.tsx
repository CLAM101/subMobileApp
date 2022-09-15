import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../authstack/signup";
import Home from "./home";
import { NavigationContainer } from "@react-navigation/native";
import StartOrder from "../orderstack/ordernavcontainer";
import LoadAnimation from "./loadanimation";
import Settings from "./settings";
import Profile from "./profile";
import OrderNavContainer from "../orderstack/ordernavcontainer";
import { NavigationStackProp } from "react-navigation-stack";
import AppHeader from "../globals/appheader";
import Welcome from "./welcome";
import AuthNavContainer from "../authstack/authnavcontainer.";
import { setLoggedState, selectLoggedState } from "../slices/navSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const { Navigator, Screen } = createStackNavigator();

const MainNavContainer: React.FunctionComponent = () => {
  const loggedState = useAppSelector(selectLoggedState);

  return (
    <NavigationContainer independent={true}>
      <Navigator
        screenOptions={{
          header: (props) => <AppHeader {...props} />,
          headerShown: loggedState
        }}
        initialRouteName="Home"
      >
        <Screen
          name="Home"
          component={Home}
        />

        <Screen
          name="OrderNavContainer"
          component={OrderNavContainer}
        />
        <Screen
          name="Profile"
          component={Profile}
        />
        <Screen
          name="Settings"
          component={Settings}
        />
        <Screen
          name="Welcome"
          component={Welcome}
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
