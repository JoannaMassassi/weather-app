import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9D9EB',
    paddingHorizontal: 15,
  },

  header: {
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0C2340',
  },

  primaryText: {
    fontWeight: 'bold',
    color: '#6082B6',
    alignSelf: 'center',
  },

  secondaryText: {
    alignSelf: 'center',
    color: '#0C2340',
    fontWeight: 'bold',
    fontSize: 14,
  },

  extraText: {
    color: 'white',
    fontWeight: 'bold',
  },

  middleView: {
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  listItemContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
