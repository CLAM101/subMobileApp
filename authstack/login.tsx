import * as React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  setOrigin,
  selectOrigin,
  setLoggedState,
  selectLoggedState,
} from "../slices/navSlice";
import makeRequest from "../generics/makerequest";

interface Props {
  navigation: NavigationStackProp;
}

const Login: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  interface formStateType {
    username: string;
    email: string;
    password: string;
  }

  interface reqDetails {
    method: string;
    data: {
      username: string | null;
      email: string | null;
      password: string | null;
      addOrRemoveItem: string | null;
    };
    withCredentials: true;
    reqType: string;
    url: string;
  }

  const [formState, setFormState] = React.useState<formStateType>({
    username: "",
    email: "",
    password: "",
  });

  let loginDetails: reqDetails = {
    method: "POST",
    withCredentials: true,
    data: {
      username: formState.username,
      email: formState.email,
      password: formState.password,
      addOrRemoveItem: null,
    },
    reqType: "login",
    url: "http://10.0.2.2:3000/subscribers/",
  };

  let checkLogDetails: reqDetails = {
    method: "POST",
    withCredentials: true,
    data: {
      username: null,
      email: null,
      password: null,
      addOrRemoveItem: null,
    },
    reqType: "logStatusCheck",
    url: "http://10.0.2.2:3000/subscribers/",
  };

  // handle press for login button
  function handlePress() {
    if (makeRequest(loginDetails) === true) {
      dispatch(setLoggedState(true));
    }
  }

  // checks logged in status on first render
  React.useEffect(() => {
    if (makeRequest(checkLogDetails) === true) {
      dispatch(setLoggedState(true));
    }
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.topText}>Welcome, please login</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.inputs}
          onChangeText={(text: string) => {
            setFormState({
              ...formState,
              username: text,
            });
          }}
          value={formState.username}
          placeholder="username"
        />
        <TextInput
          style={style.inputs}
          onChangeText={(text: string) => {
            setFormState({
              ...formState,
              password: text,
            });
          }}
          value={formState.password}
          secureTextEntry={true}
          placeholder="password"
        />
      </View>
      <TouchableOpacity onPress={handlePress} style={style.button}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.signupButton}
        onPress={() => props.navigation.navigate("Signup")}
      >
        <Text style={{ color: "white" }}>Dont have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F3D3E",
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E2DCC8",
    padding: 20,
    borderRadius: 30,
    top: 70,
    marginLeft: 5,
    elevation: 5,
    width: 280,

    border: 5,
    borderColor: "black",
    marginBottom: 15,
  },
  inputContainer: {
    top: 60,
    flex: 0.6,
  },
  buttonText: {
    fontSize: 20,
    color: "#0F3D3E",
  },
  signupButton: {
    top: 70,
  },
  inputs: {
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    width: 180,
    backgroundColor: "#E2DCC8",
    textAlign: "center",
    color: "#0F3D3E",
    borderColor: "#0F3D3E",
    flex: 0.1,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E2DCC8",
    marginBottom: 20,
  },
});
