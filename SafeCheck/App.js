import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import SendAlertScreen from "./SendAlert.js";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to SendAlertScreen"
          onPress={() => this.props.navigation.navigate("SendAlert")}
        />
      </View>
    );
  }
}

const RootNav = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SendAlert: { screen: SendAlertScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
