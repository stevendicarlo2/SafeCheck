import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

class InstitutionAlertScreen extends React.Component {
  static navigationOptions = {
    title: "Our Alerts"
  };
  constructor(props) {
    super(props);
    this.state = { data: "" };
    console.log(this.state);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    AsyncStorage.getItem("@MySuperStore:phoneNumber").then(phone => {
      fetch("http://35.227.69.77/api/alert?phone=" + phone, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            data: responseJson["alerts"][0]["id"]
          });
        });
    });
  }
  render() {
    console.log(this.state.data);
    return <Text>{this.state.data}</Text>;
  }
}

export default InstitutionAlertScreen;
