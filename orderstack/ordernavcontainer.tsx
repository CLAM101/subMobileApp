import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setOrigin, selectOrigin } from "../slices/navSlice";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoadAnimation from "../mainstack/loadanimation";
import Home from "../mainstack/home";


const { Navigator, Screen } = createStackNavigator();

interface Props {
  navigation: NavigationStackProp;
}

// this page needs its own navigation stack to navigate to various order opetions

//top search bar with set preferences button attached

//navbar options: account, cart, start order, home

// need results page for different result types give some thought t how this will look

const OrderNavContainer: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <NavigationContainer independent={true} >
    <Navigator initialRouteName="Home">
      <Screen
        name="StartOrderHome"
        component={Home}
      />
      <Screen
        name="StartOrder"
        component={StartOrder}
      />
      <Screen
        name="LoadAnimation"
        component={LoadAnimation}
      />
      <Screen
        name="LoadAnimation"
        component={LoadAnimation}
      />
      <Screen
        name="LoadAnimation"
        component={LoadAnimation}
      />
    </Navigator>
  </NavigationContainer>
  )
};

export default OrderNavContainer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
