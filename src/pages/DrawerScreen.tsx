import React from "react";
import { View, Text } from "react-native";
import { DrawerItemsProps } from "react-navigation";

export class DrawerScreen extends React.Component<DrawerItemsProps> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue"
        }}
      >
        <Text>Drawer screen</Text>
      </View>
    );
  }
}
