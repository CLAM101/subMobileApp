import { createSlice } from "@reduxjs/toolkit/";
import { RootState } from "../store";

export interface State  {
  origin: string | null | object | [];
  destination: string | null | object | [];
  travelTimeInformation: string | null | object | [];
  loggedState: boolean
  activeOrder: string
  availableCollection: boolean
  activeOrderDetail: object
  orderHistory: [];
};

const initialState: State = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  loggedState: false,
  activeOrder: "",
  availableCollection: false,
  activeOrderDetail: {},
  orderHistory: []
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setLoggedState: (state, action) => {
      console.log(
        "action payload logged state",
        action.payload,
        "state",
        state
      );
      state.loggedState = action.payload;
    },
    setActiveOrder: (state, action) => {
      console.log(
        "action payload logged state",
        action.payload,
        "state",
        state
      );
      state.activeOrder = action.payload;
    },
    setAvailableCollection: (state, action) => {
      console.log(
        "action payload logged state",
        action.payload,
        "state",
        state
      );
      state.availableCollection = action.payload;
    },
    setActiveOrderDetail: (state, action) => {
      console.log(
        "action payload logged state",
        action.payload,
        "state",
        state
      );
      state.activeOrderDetail = action.payload;
    },
    setOrderHistory: (state, action) => {
      console.log(
        "action payload order history",
        action.payload,
        "state",
        state
      );
      state.orderHistory = action.payload;
    }
  }
});

export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setLoggedState,
  setActiveOrder,
  setAvailableCollection,
  setActiveOrderDetail,
  setOrderHistory
} = navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;
export const selectLoggedState = (state: RootState) => state.nav.loggedState;
export const selectActiveOrder = (state: RootState) => state.nav.activeOrder;
export const selectAvailableCollection = (state: RootState) =>
  state.nav.availableCollection;
export const selectActiveOrderDetail = (state: RootState) =>
  state.nav.activeOrderDetail;
export const selectOrderHistory = (state: RootState) => state.nav.orderHistory;

export default navSlice.reducer;
