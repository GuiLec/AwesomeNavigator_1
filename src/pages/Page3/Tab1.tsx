import React from "react";
import { View, Text } from "react-native";

export class Tab1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "brown"
        }}
      >
        <Text>Page 3 - Tab 1</Text>
      </View>
    );
  }
}
