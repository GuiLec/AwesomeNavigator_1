import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  SafeAreaView,
  MaterialTopTabBar
} from "react-navigation";
import {
  HomeScreen,
  DetailsScreen,
  Page2,
  Tab1,
  Tab2,
  DrawerScreen,
  Page4
} from "./src/pages/";
import { Dimensions } from "react-native";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Tab1,
    Tab2
  },
  {
    tabBarComponent: props => (
      <SafeAreaView>
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    )
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: StackNavigator,
  Page2: Page2,
  Page3: TopTabNavigator,
  Page4
});

const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator
  },
  {
    contentComponent: DrawerScreen,
    initialRouteName: "TabNavigator",
    drawerWidth: Dimensions.get("screen").width - 56,
    edgeWidth: 100,
    drawerType: "front"
  }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
