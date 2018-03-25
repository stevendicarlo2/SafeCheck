import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  Button
} from "react-native";

class AlertDetailScreen extends React.Component {
  static navigationOptions = {
    title: "This Alert"
  };

  constructor(props) {
    super(props);
    console.log(this.props);
  }
  close_alert() {
    AsyncStorage.getItem("@MySuperStore:phoneNumber").then(phone => {
      var params = {
        phone: phone,
        status: "Closed"
      };
      var formData = [];

      for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formData.push(encodedKey + "=" + encodedValue);
      }
      formData = formData.join("&");

      fetch("http://35.227.69.77/api/alert?" + phone, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Medical Emergency</Text>
        <Text>
          Description:{" "}
          {this.props.navigation.state.params.event.description ? (
            this.props.navigation.state.params.event.description
          ) : (
            "None"
          )}
        </Text>
        <Text>
          Location Detail:{" "}
          {this.props.navigation.state.params.event.location_detail ? (
            this.props.navigation.state.params.event.location_detail
          ) : (
            "None"
          )}
        </Text>
        <Text>Phone: {this.props.navigation.state.params.event.phone}</Text>

        {!this.props.navigation.state.params.inst && (
          <TouchableOpacity
            style={styles.redButton}
            title="Close Alert"
            onPress={() => this.close_alert()}
          >
            <Text style={styles.alertText}>Close</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default AlertDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
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
