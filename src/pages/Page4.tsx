import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps, DrawerActions } from "react-navigation";

export class Page4 extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View
        style={{
          backgroundColor: "red",
          flex: 1
        }}
      >
        <View style={{ padding: 50, alignItems: "flex-end" }}>
          <Button
            title={"Press"}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Page 4</Text>
        </View>
      </View>
    );
  }
}
