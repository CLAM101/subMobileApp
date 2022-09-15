import * as React from "react";
import axios from "axios";

interface reqDetails {
  method: string;
  url: string;
  withCredentials: boolean;
  data: object;
}

interface response {
  data: object;
}

function makeRequest(reqDetails: reqDetails): object {
  axios({
    method: reqDetails.method,
    url: reqDetails.url,
    withCredentials: reqDetails.withCredentials
  }).then((response: response) => {
    // console.log("response status check log driver logged in", response);
    if (response.data === false) {
      dispatch(setLoggedState(false));
    }
  });

  return;
}

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

function login() {
  console.log("password", formState.password, "username", formState.username);

  axios({
    method: "POST",
    data: {
      username: formState.username,
      // email: formState.email,
      password: formState.password
    },
    withCredentials: true,
    url: "http://10.0.2.2:3000/subscribers/login"
  })
    .then((res) => {
      console.log(res);
      dispatch(setLoggedState(true));

      console.log("username", res.data.username);
    })
    .catch(function (error) {
      console.log("error on login", error);
    });
}

function checkLog() {
  console.log("check log called");
  axios({
    method: "POST",
    withCredentials: true,
    url: "http://10.0.2.2:3000/subscribers/logStatusCheck"
  })
    .then((response) => {
      console.log("response on checkLog driver", response.data);

      if (response.data === true) {
        dispatch(setLoggedState(true));
      } else {
      }
    })
    .catch((error) => {
      console.log("error on checklog driver logged in", error);
    });
}
