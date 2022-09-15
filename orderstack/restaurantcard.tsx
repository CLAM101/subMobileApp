import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setOrigin, selectOrigin } from "../slices/navSlice";

interface Props {
  navigation: NavigationStackProp;
}

const RestaurantCard: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  return <View style={style.container}></View>;
};

export default RestaurantCard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
