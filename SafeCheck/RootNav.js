import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  TextInput
} from "react-native";
import { StackNavigator } from "react-navigation";
import SendAlertScreen from "./SendAlert.js";

const RootNav = StackNavigator(
  {
    SendAlert: { screen: SendAlertScreen }
  },
  {
    initialRouteName: "SendAlert"
  }
);
export default RootNav;
