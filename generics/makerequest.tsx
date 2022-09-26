import * as React from "react";
import axios from "axios";
import {
  setOrigin,
  selectOrigin,
  setLoggedState,
  selectLoggedState,
} from "../slices/navSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

interface reqDetails {
  method: string;
  url: string;
  withCredentials: boolean;
  data: {
    addOrRemoveItem: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
  };
  reqType: string;
}

interface response {
  data: object | boolean;
  status: number;
}

function makeRequest(reqDetails: reqDetails): object | boolean {
  const [response, setResponse] = React.useState<object | boolean>({});

  // const dispatch = useAppDispatch();
  axios({
    method: reqDetails.method,
    url: reqDetails.url + reqDetails.reqType,
    withCredentials: reqDetails.withCredentials,
  }).then((response: response) => {
    // console.log("response status check log driver logged in", response);

    switch (reqDetails.reqType) {
      case "login":
        if (response.status === 201) {
          setResponse(true);
        } else if (response.status === 400) {
          alert("Incorrect username or password");
        }
        break;
      case "logout":
        if (response.data === false) {
          // dispatch(setLoggedState(false));
        } else if (response.data === true) {
          alert("error logging out");
        }
        break;
      case "logStatusCheck":
        if (response.data === true) {
          // dispatch(setLoggedState(true));
        } else if (response.data === false) {
          // dispatch(setLoggedState(false));
        }
        break;
      case "editCart":
        if (
          response.status === 200 &&
          reqDetails.data.addOrRemoveItem === "add"
        ) {
          alert("sucessfully added item to cart");
        } else if (
          response.status === 200 &&
          reqDetails.data.addOrRemoveItem === "remove"
        ) {
          alert("sucessfully removed Item from cart");
        } else if (response.status === 404) {
          alert(response.data);
        }
        break;
      case "checkout":
        if (response.status === 200) {
          setResponse(response.data);
        } else if (response.status === 400) {
          alert("error checking out");
          setResponse(response.data);
        }
        break;
      case "refund-order":
        if (response.status === 200) {
          alert("refund request successful");
          setResponse(response.data);
        } else if (response.status === 401) {
          setResponse(response.data);
        }
        break;
      case "create-payment-intent":
        if (response.status === 200) {
          setResponse(response.data);
        } else if (response.status === 401) {
          alert("Payment intent unsuccessfull");
          setResponse(response.data);
        }

        break;
      default:
        null;
        break;
    }
  });

  return response;
}

export default makeRequest;
