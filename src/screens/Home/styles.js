import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  bgImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    width: 140,
    marginLeft: 25,
  },
  btn: {
    backgroundColor: '#fff',
    marginLeft: 25,
    width: 200,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    zIndex: 1,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
  },
  btnTextSearch: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
});

export default styles;
