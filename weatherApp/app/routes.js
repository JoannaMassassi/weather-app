import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from "./screens/weatherIndex";
import CityDetails from "./screens/cityDetails";




const AppStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Weathers">
        <AppStack.Screen name="Weathers" component={Weather} />
        <AppStack.Screen name="CityDetails" component={CityDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

