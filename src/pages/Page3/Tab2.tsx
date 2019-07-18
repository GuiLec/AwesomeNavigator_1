import React from "react";
import { View, Text } from "react-native";

export class Tab2 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green"
        }}
      >
        <Text>Page 3 - Tab 2</Text>
      </View>
    );
  }
}
