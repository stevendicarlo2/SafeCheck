import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  Button,
  TextInput
} from "react-native";
import { NavigationActions } from "react-navigation";

class AlertDetailScreen extends React.Component {
  static navigationOptions = {
    title: "This Alert"
  };

  constructor(props) {
    super(props);
    this.state = {
      phone: this.props.navigation.state.params.event.phone,
      description: this.props.navigation.state.params.event.description,
      locationDetail: this.props.navigation.state.params.event.location_detail,
      status: this.props.navigation.state.params.event.status
    };
    console.log(this.props.navigation.state.params.event);
  }
  componentWillReceiveProps() {}

  update_alert() {
    AsyncStorage.getItem("@MySuperStore:phoneNumber").then(phone => {
      var params = {
        phone: this.state.phone,
        status: this.state.status,
        location_detail: this.state.locationDetail,
        description: this.state.description
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
      }).bind(this);
    });
  }

  close_alert() {
    this.setState({
      status: "Closed"
    });
    this.update_alert();
    const showUserAlertAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "SendAlert"
        })
      ]
    });
    this.props.navigation.dispatch(showUserAlertAction);
  }
  render() {
    if (!this.props.navigation.state.params.inst) {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.item}
            placeholder={"Please enter description"}
            value={this.state.description && this.state.description}
            onChangeText={text => this.setState({ description: text })}
            onSubmitEditing={() => this.update_alert()}
          />
          <TextInput
            style={styles.item}
            placeholder="Please enter Location Detail"
            value={this.state.locationDetail && this.state.locationDetail}
            onChangeText={text => this.setState({ locationDetail: text })}
            onSubmitEditing={() => this.update_alert()}
          />

          <Text style={styles.item}>
            Person to contact: {this.props.navigation.state.params.event.phone}
          </Text>

          <TouchableOpacity
            style={styles.redButton}
            title="Close Alert"
            onPress={() => this.close_alert()}
          >
            <Text style={styles.alertText}>Close</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
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
        </View>
      );
    }
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
