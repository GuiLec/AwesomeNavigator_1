import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { HomeScreen, DetailsScreen, Page2 } from "./src/pages/";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Page2: Page2
});

const StackNavigator = createStackNavigator(
  {
    Home: TabNavigator,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
