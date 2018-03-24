import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";

class SendAlertScreen extends React.Component {
  static navigationOptions = {
    title: "Send Alert"
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: "" };
  }
  sendAlert(emergency) {
    var params = {
      lat: 38.031,
      long: -78.511,
      phone: "2032473306",
      emergency: emergency
    };
    var formData = [];

    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formData.push(encodedKey + "=" + encodedValue);
    }
    formData = formData.join("&");

    fetch("http://35.227.69.77/api/alert/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.alertButton}
          title="Local"
          onPress={() => {
            this.sendAlert(false);
          }}
        >
          <Text style={styles.alertText}>Local</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          title="Emergency"
          onPress={() => {
            this.sendAlert(true);
          }}
        >
          <Text style={styles.alertText}>Emergency</Text>
          <Text>{this.state.data}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SendAlertScreen;
const styles = StyleSheet.create({
  alertButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  redButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  alertText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});
