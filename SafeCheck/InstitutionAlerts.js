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
            data: responseJson["alerts"]
          });
        });
    });
  }
  renderDetail() {
    this.props.navigation.navigate("AlertDetail");
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Button
              title={item.id.toString()}
              onPress={() => this.renderDetail()}
            />
          )}
        />
      </View>
    );
  }
}

export default InstitutionAlertScreen;

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
