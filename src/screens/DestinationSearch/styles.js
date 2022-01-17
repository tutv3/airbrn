import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderRadius: 5,
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'relative',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 12,
    backgroundColor: '#999',
    height: 24,
    width: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
