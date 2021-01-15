import { Alert } from 'react-native';
import { INITIALIZE, RECEIVED_WEATHERS } from './keys';

export function onInitialStore(data) {
  return {
    type: INITIALIZE,
    data: data,
  };
}

export function receivedWeathers(data) {
  return {
    type: RECEIVED_WEATHERS,
    data: data,
  };
}

export function fetchWeathers() {
  return async function (dispatch) {
    try {
      await fetch(
        'https://api.openweathermap.org/data/2.5/box/city?bbox=-100.3167,25.6667,-103.3333,20.6667,7&appid=4a461c2eb553056d2e88af52364a2d0d&units=metric/countries',
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(receivedWeathers(data.list));
        })
        .catch((e) => {
          Alert.alert('There was a problem with this service');
        });
    } catch (e) {
      Alert.alert('There was a problem with this service');
    }
  };
}
