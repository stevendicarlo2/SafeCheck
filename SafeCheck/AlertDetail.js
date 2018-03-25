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
  render() {
    return (
      <View style={styles.container}>
        <Text>Medical Emergency</Text>
        <Text>second floor balcony</Text>
        <Text>TOO MUCH CODING</Text>
        <Text>7245723491385</Text>
      </View>
    );
  }
}

export default AlertDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
