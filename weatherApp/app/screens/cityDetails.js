import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import moment from 'moment';
import API_KEY from '../lib/key';
import WeatherPreview from '../components/weatherPreview';

function DetailsScreen({navigation, route}) {
  
  let item = route?.params?.city;
  let cityName = item?.name ?? '';
  let lat = item?.coord?.Lat;
  let long = item?.coord?.Lon;
  let actualTemp = parseInt(item?.main?.temp) + '°';
  let actualTempMax = parseInt(item?.main?.temp_max) + '°';
  let actualTempMin = parseInt(item?.main?.temp_min) + '°';
  let [nextDaysWeather, setWeather] = useState([]);
  let [isFetching, setFetching] = useState(false)
  let feelLike =  parseInt(item?.main?.feels_like) + '°'
  let humidity = item?.main?.humidity +'%'

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
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            {dateConverted}
          </Text>
          <Image source={urlIcon} style={{width: 40, height: 40}} />
          <Text style={{color: '#0C2340', fontWeight: 'bold'}}>
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
    setFetching(true)
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&appid=${API_KEY}&units=metric`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setWeather(data?.daily);
            setFetching(false)
          }
          
        })
        .catch((e) => {
          setFetching(false)
          Alert.alert('There was a problem with this service');
        });
    } catch (e) {
      setFetching(false)
      Alert.alert('There was a problem with this service');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#B9D9EB', paddingHorizontal: 15}}>
      <Text
        style={{
          marginTop: 20,
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 25,
          color: '#0C2340',
        }}>
        {cityName}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          color: '#6082B6',
          alignSelf: 'center',
        }}>
        {actualTemp}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#6082B6',
          alignSelf: 'center',
        }}>
        {actualTempMax+' / '+actualTempMin}
      </Text>
      <View style={{width: '100%', flex: 1}}>

        <View style={{ height:'20%', justifyContent:'space-between', flexDirection:'row' }}>
          <Text style={{alignSelf:'center', color:'#0C2340', fontWeight:'bold', fontSize:14}}>Feels like: <Text style={{color:'white', fontWeight:'bold', fontSize:14}}>{feelLike}</Text></Text>
          <Text  style={{alignSelf:'center', color:'#0C2340', fontWeight:'bold', fontSize:14}}>Humidity: <Text style={{color:'white', fontWeight:'bold', fontSize:14}}>{humidity}</Text></Text>
        </View>
        {isFetching ?<View style={{marginTop:35}}><ActivityIndicator color="black" size={'large'} color={'#6082B6'} /></View>  : null}
        {nextDaysWeather.length > 0  ? (
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
