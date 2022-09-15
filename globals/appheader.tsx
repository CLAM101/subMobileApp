import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { setLoggedState, selectLoggedState } from "../slices/navSlice";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../hooks";
import { NavigationStackProp } from "react-navigation-stack";

interface Props {
  navigation: NavigationStackProp;
}

const AppHeader: React.FunctionComponent<Props> = (props) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const dispatch = useAppDispatch();

  function logOut() {
    axios({
      method: "POST",
      url: "http://10.0.2.2:3000/drivers/logout",
      withCredentials: true
    }).then((response) => {
      // console.log("response status check log driver logged in", response);
      if (response.data === false) {
        dispatch(setLoggedState(false));
      }
    });
  }

  return (
    <Appbar.Header>
      {props.navigation.back ? (
        <Appbar.BackAction onPress={props.navigation.goBack} />
      ) : null}
      <Appbar.Content
        title={<Text style={style.headerText}>Budget Bites</Text>}
      />
      {!props.navigation.back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="menu"
              color="#0F3D3E"
              onPress={openMenu}
            />
          }
        >
          <Menu.Item
            style={{ backgroundColor: "#E2DCC8" }}
            onPress={() => props.navigation.navigate("Home")}
            title={<Text style={style.menuText}>Home</Text>}
          />
          <Menu.Item
            style={{ backgroundColor: "#E2DCC8" }}
            onPress={() => props.navigation.navigate("OrderNavContainer")}
            title={<Text style={style.menuText}>Start Your Order</Text>}
          />
          <Menu.Item
            style={{ backgroundColor: "#E2DCC8" }}
            onPress={() => props.navigation.navigate("Profile")}
            title={<Text style={style.menuText}>Profile</Text>}
          />
          <Menu.Item
            style={{ backgroundColor: "#E2DCC8" }}
            onPress={() => props.navigation.navigate("Settings")}
            title={<Text style={style.menuText}>Settings</Text>}
          />
          <Menu.Item
            style={{ backgroundColor: "#E2DCC8" }}
            onPress={logOut}
            title={<Text style={style.menuText}>Logout</Text>}
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default AppHeader;

const style = StyleSheet.create({
  headerText: {
    color: "#0F3D3E",
    fontWeight: "bold",
    fontSize: 30
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
