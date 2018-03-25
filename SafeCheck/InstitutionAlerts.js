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
            data: responseJson["alerts"],
            is_inst: responseJson["inst"]
          });
        });
    });
  }
  renderDetail(item) {
    this.props.navigation.navigate("AlertDetail", {
      event: item,
      inst: this.state.is_inst
    });
  }
  _renderItem = ({ item }) =>
    item.status == "Open" && (
      <Button
        title={
          item.id.toString() +
          (item.emergency
            ? " Emergency: " + item.description
            : " Local: " + item.description)
        }
        onPress={() => this.renderDetail(item)}
      />
    );
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
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
