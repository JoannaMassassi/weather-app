import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from './screens/Index/weatherIndex';
import CityDetails from './screens/Details/cityDetails';

const AppStack = createStackNavigator();

function NavTitle(props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', width:'100%', paddingHorizontal:10,flex:1, justifyContent:'space-between'}}>
      <Text style={{color: '#0C2340', fontWeight: 'bold', fontSize: 18}}>
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
