import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
//import animation from "../assets/118336-please-wait (1).json";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProp } from 'react-navigation-stack';


interface Props{
navigation: NavigationStackProp
}

const LoadAnimation: React.FunctionComponent<Props> = (props) =>{

  return (
<View style={style.container}>
<Text>Load Animation</Text>
<TouchableOpacity
onPress={() => props.navigation.navigate("home")}
><Text>Navigate</Text>
</TouchableOpacity>
</View>
  
  
    )
}


export default LoadAnimation

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2DCC8"
  }
});

/* <LottieView
        autoPlay
        source={}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#E2DCC8"
        }}
      /> */
