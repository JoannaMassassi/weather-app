import * as React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from './screens/weatherIndex';
import CityDetails from './screens/cityDetails';

const AppStack = createStackNavigator();
const {width} = Dimensions.get("window")

function NavTitle(props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', width, paddingHorizontal:10}}>
      <Text style={{color: '#0C2340', fontWeight: 'bold', fontSize: 18, flex: 1}}>
        {props.title}
      </Text>
      <Image
        style={{width: 40, height: 30}}
        source={require('./images/weather.png')}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
        initialRouteName="Weathers">
        <AppStack.Screen
          options={{
            headerTitle: (props) => (
              <NavTitle title={'WeatherApp'} {...props} />
            ),
          }}
          name="Weathers"
          component={Weather}
        />
        <AppStack.Screen
          options={{headerTitle: (props) => <NavTitle title={''} {...props} />}}
          name="City Details"
          component={CityDetails}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
