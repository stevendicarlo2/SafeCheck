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
import InstitutionAlertScreen from "./InstitutionAlerts.js";

const RootNav = StackNavigator(
  {
    SendAlert: { screen: SendAlertScreen },
    InstitutionAlerts: { screen: InstitutionAlertScreen }
  },
  {
    initialRouteName: "SendAlert"
  }
);
export default RootNav;
