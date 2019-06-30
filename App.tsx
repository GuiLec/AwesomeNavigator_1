import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { HomeScreen, DetailsScreen, Page2 } from "./src/pages/";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: StackNavigator,
  Page2: Page2
});
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
