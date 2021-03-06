import React, {useState, useEffect} from 'react';
import { Text, View, ActivityIndicator, FlatList, Alert } from 'react-native';
import { fetchWeathers, receivedWeathers } from '../../redux/appStore/actions';
import { useSelector, useDispatch } from 'react-redux';
import WeatherPreview from '../../components/weatherPreview/weatherPreview';
import styles from './indexStyle';

function WeatherScreen({navigation}) {
  const dispatch = useDispatch();
  const {app} = useSelector((store) => store);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    loadWeathers();
  }, []);

  const loadWeathers = () => {
    dispatch(receivedWeathers());
    dispatch(fetchWeathers())
      .then(() => {
        setFetching(false);
      })
      .catch((e) => {
        Alert.alert('There seems to be an error');
      });
  };

  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator color="black" size={'large'} color={'#6082B6'} />
      ) : (
        <View style={{flex: 1, width: '100%'}}>
          <Text style={styles.header}>The weather now</Text>
          <FlatList
            style={{marginTop: 15}}
            contentContainerStyle={{paddingBottom: 15}}
            keyExtractor={(item, index) => index.toString()}
            data={app?.weathers}
            renderItem={({item, index}) => (
              <WeatherPreview
                item={item}
                onPressItem={() =>
                  navigation.navigate('City Details', {city: item})
                }
              />
            )}
          />
        </View>
      )}
    </View>
  );
}

export default WeatherScreen;
