import * as React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationStackProp } from 'react-navigation-stack';


interface Props{
navigation: NavigationStackProp
}


 const Signup: React.FunctionComponent <Props> = (props) => {
  return (
    <View style={style.container}>
      <Text>Hello Signup</Text>
     <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
        <Text>move</Text>
     </TouchableOpacity>

      
    </View>
  );
};

export default Signup

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
