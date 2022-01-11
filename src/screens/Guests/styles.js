import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 24,
    backgroundColor: '#fff',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 40,
    height: 40,
    width: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  value: {
    fontSize: 18,
    paddingHorizontal: 16,
    color: '#111',
  },
});

export default styles;
