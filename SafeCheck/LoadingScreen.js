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
import RootNav from "./RootNav.js";

class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: "Loading Screen"
  };
  constructor(props) {
    super(props);
    this.put_in_number = this.put_in_number.bind(this);

    this.state = {
      phoneNumber: null
    };
  }

  componentDidMount() {
    this.get_phone_number();
  }
  delete_phone_number() {
    try {
      AsyncStorage.removeItem("@MySuperStore:phoneNumber").then(phone => {
        console.log("removed number:" + phone);
      });
    } catch (error) {
      console.log("could not retrieve number");
    }
  }

  get_phone_number() {
    try {
      AsyncStorage.getItem("@MySuperStore:phoneNumber").then(phone => {
        console.log("Got number:" + phone);
        this.setState({
          phoneNumber: phone
        });
      });
    } catch (error) {
      console.log("could not retrieve number");
    }
  }
  async put_in_number(number) {
    try {
      await AsyncStorage.setItem("@MySuperStore:phoneNumber", number);
      console.log("put in number: " + number);
      this.setState({
        phoneNumber: number
      });
    } catch (error) {
      console.log("could not save number");
      console.log(error);
    }
  }

  transition() {
    this.props.navigation.navigate("SendAlert");
  }

  render() {
    if (this.state.phoneNumber) {
      return <RootNav />;
    } else {
      console.log("in no number branch");
      return (
        <TextInput
          style={{ flex: 1 }}
          placeholder="Please enter phone number"
          onChangeText={text => this.setState({ textBoxValue: text })}
          onSubmitEditing={() => this.put_in_number(this.state.textBoxValue)}
        />
      );
    }
  }
}

export default LoadingScreen;
