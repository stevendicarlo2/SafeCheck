import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList
} from "react-native";

class AlertDetailScreen extends React.Component {
  static navigationOptions = {
    title: "This Alert"
  };

  constructor(props) {
    super(props);
    console.log(this.props);
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
  }
});
