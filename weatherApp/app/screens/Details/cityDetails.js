import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import API_KEY from '../../lib/key';
import styles from './detailsStyle';
import API_URL from '../../lib/url';
function DetailsScreen({navigation, route}) {
  let item = route?.params?.city;
  let cityName = item?.name ?? '';
  let lat = item?.coord?.Lat;
  let long = item?.coord?.Lon;
  let actualTemp = parseInt(item?.main?.temp) + '°';
  let actualTempMax = parseInt(item?.main?.temp_max) + '°';
  let actualTempMin = parseInt(item?.main?.temp_min) + '°';
  let [nextDaysWeather, setWeather] = useState([]);
  let [isFetching, setFetching] = useState(false);
  let feelLike = parseInt(item?.main?.feels_like) + '°';
  let humidity = item?.main?.humidity + '%';

  useEffect(() => {
    _fetchDetailedWeather();
  }, []);

  const _renderItem = (item) => {
    let nextDaysmaxTemp = parseInt(item?.temp?.max) + '°';
    let nextDaysminTemp = parseInt(item?.temp?.min) + '°';
    let codeIcon = item?.weather?.[0]?.icon;
    let urlIcon = {uri: `http://openweathermap.org/img/w/${codeIcon}.png`};
    let timestamp = item?.dt;
    let dateConverted = moment.unix(timestamp).format('MMM DD');

    return (
      <>
        <View style={styles.listItemContainer}>
          <Text style={[styles.extraText, {fontSize: 16}]}>
            {dateConverted}
          </Text>
          <Image source={urlIcon} style={{width: 40, height: 40}} />
          <Text style={styles.secondaryText}>
            {' '}
            {nextDaysmaxTemp + ' / ' + nextDaysminTemp}
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0.5,
            width: '100%',
            alignSelf: 'center',
            borderColor: '#4B9CD3',
          }}
        />
      </>
    );
  };
  const _fetchDetailedWeather = async () => {
    setFetching(true);
    try {
      await fetch(
        `${API_URL}/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&appid=${API_KEY}&units=metric`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setWeather(data?.daily);
            setFetching(false);
          }
        })
        .catch((e) => {
          setFetching(false);
          Alert.alert('There was a problem with this service');
        });
    } catch (e) {
      setFetching(false);
      Alert.alert('There was a problem with this service');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{cityName}</Text>
      <Text style={[styles.primaryText, {fontSize: 40}]}>{actualTemp}</Text>
      <Text style={[styles.primaryText, {fontSize: 18}]}>
        {actualTempMax + ' / ' + actualTempMin}
      </Text>
      <View style={{width: '100%', flex: 1}}>
        <View style={styles.middleView}>
          <Text style={styles.secondaryText}>
            Feels like:{' '}
            <Text style={[styles.extraText, {fontSize: 14}]}>{feelLike}</Text>
          </Text>
          <Text style={styles.secondaryText}>
            Humidity: <Text style={styles.extraText}>{humidity}</Text>
          </Text>
        </View>
        {isFetching ? (
          <View style={{marginTop: 35}}>
            <ActivityIndicator color="black" size={'large'} color={'#6082B6'} />
          </View>
        ) : null}
        {nextDaysWeather.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            contentContainerStyle={{paddingBottom: 40, paddingTop: 15}}
            keyExtractor={(item, index) => index.toString()}
            data={nextDaysWeather}
            renderItem={({item, index}) => _renderItem(item)}
          />
        ) : null}
      </View>
    </View>
  );
}

export default DetailsScreen;
