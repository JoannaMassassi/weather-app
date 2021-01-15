import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import styles from "./style";
const {width, height} = Dimensions.get('window');

export default function WeatherPreview(props) {
  let cityName = props?.item?.name ?? '';
  let iconCode = props.item.weather[0].icon;
  let iconUrl = {uri: `http://openweathermap.org/img/w/${iconCode}.png`};
  let actualTemp = parseInt(props?.item?.main?.temp) + '°';


  const _rightContainer = () => {
    return (
      <View style={[{alignSelf: 'center',  flexDirection:'row', paddingRight:10}]}>
        <Image
          source={iconUrl}
          style={{width: width / 8, height: height / 20}}
        />
        <Text style={{color:'#0C2340', fontSize: 20}}>{actualTemp}</Text>
      </View>
    );
  };

  const _renderInnerContent = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#87CEEB',
          borderRadius: 7,
          flexDirection: 'column',
          justifyContent:'center',
          flex: 1,
        }}>
        <View
          style={{
           flexDirection:'row',
           alignSelf:'center'
          }}>
          <View style={{marginLeft: 10, flex: 2, flexDirection: 'row'}}>
            <Text
              style={styles.textStyle}>
              {cityName}
            </Text>
          </View>
          {_rightContainer()}
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={props.onPressItem} style={styles.buttonStyle}>
      {_renderInnerContent()}
    </TouchableOpacity>
  );
}

