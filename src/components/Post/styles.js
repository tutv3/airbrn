import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  rooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    color: '#222',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 5,
    color: '#222',
  },
  currentPrice: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 16,
  },
  total: {
    textDecorationLine: 'underline',
  },
});

export default styles;
