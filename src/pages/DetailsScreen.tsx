import React from "react";
import { View, Text } from "react-native";

export class DetailsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "yellow"
        }}
      >
        <Text>Details Screen</Text>
      </View>
    );
  }
}
