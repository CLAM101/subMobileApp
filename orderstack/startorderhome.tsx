import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setOrigin, selectOrigin } from "../slices/navSlice";

interface Props {
  navigation: NavigationStackProp;
}

const StartOrderHome: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={style.container}>
      <Text>Hello World</Text>
    </View>
  );
};

export default StartOrderHome;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
