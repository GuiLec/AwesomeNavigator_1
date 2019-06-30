import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DetailsScreen } from "./src/pages/";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
