import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
      cardStyle: {
        backgroundColor: 'white',
      },
    },
  }
);

// App.js is a very special file
// When the app boots up, anything (react component) we export from this file,
// is taken by react-native and shown on the screen
// Here createAppContainer creates a react component and displays whatever content the navigator is producing
export default createAppContainer(navigator);
