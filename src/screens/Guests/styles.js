import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
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
    height: 35,
    width: 35,
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
  btnContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  btnSearch: {
    backgroundColor: '#f15454',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnSearchText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

export default styles;
