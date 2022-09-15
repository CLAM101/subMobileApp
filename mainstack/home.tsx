import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationStackProp } from 'react-navigation-stack';
import {useAppSelector, useAppDispatch} from  "../hooks"
import {setOrigin, selectOrigin} from "../slices/navSlice"

interface Props{
navigation: NavigationStackProp
}

 const Home: React.FunctionComponent <Props> = (props) => {

const origin = useAppSelector(selectOrigin)

const dispatch = useAppDispatch();

function updateOrigin () {

dispatch(setOrigin("suuup"))


}

function logOrigin () {
  console.log(origin)
}


  return (
    <View style={style.container}>
      <Text>Hello Home</Text>
      <TouchableOpacity
      onPress={updateOrigin}
      ><Text>Navigate</Text></TouchableOpacity>
      <TouchableOpacity
      onPress={logOrigin}
      ><Text>logOrigin</Text></TouchableOpacity>
    </View>
  );
};

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});




