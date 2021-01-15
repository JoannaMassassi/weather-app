import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    minHeight: 60,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: '#A6A8BA53',
    flexDirection: 'row',
    shadowColor: '#D6D8EA',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderWidth: 0.5,
    borderRadius: 7,
    elevation: 6,
    overflow: 'visible',
  },

  textStyle: {
    color: 'white',
    fontSize: 20,
    flexWrap: 'wrap',
    flex: 2,
    padding: 5,
    fontWeight: 'bold',
  },

  container: {
    width: '100%',
    backgroundColor: '#87CEEB',
    borderRadius: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },

  rightView: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingRight: 10,
  },

  tempStyle: {
    color: '#0C2340',
    fontSize: 20,
  },

  insideView: {
    marginLeft: 10,
    flex: 2,
    flexDirection: 'row',
  },
});
