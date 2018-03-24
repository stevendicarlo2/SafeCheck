import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

class SendAlertScreen extends React.Component {
  static navigationOptions = {
    title: "Send Alert"
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.alertButton}
          title="Local"
          onPress={() => {}}
        >
          <Text style={styles.alertText}>Local</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          title="Emergency"
          onPress={() => {}}
        >
          <Text style={styles.alertText}>Emergency</Text>
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
