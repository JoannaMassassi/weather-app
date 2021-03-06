import { Alert } from 'react-native';
import { INITIALIZE, RECEIVED_WEATHERS } from './keys';
import API_KEY from '../../lib/key';
import API_URL from '../../lib/url';

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
        `${API_URL}/data/2.5/box/city?bbox=-100.3167,25.6667,-103.3333,20.6667,7&appid=${API_KEY}&units=metric/countries`,
      )
        .then((res) => res.json())
        .then((data) => {
          return dispatch(receivedWeathers(data.list));
        })
        .catch((e) => {
          Alert.alert('There was a problem with this service');
        });
    } catch (e) {
      Alert.alert('There was a problem with this service');
    }
  };
}
