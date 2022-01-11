import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  iconContainer: {
    marginRight: 20,
    backgroundColor: '#d4d4d4',
    padding: 8,
    borderRadius: 5,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
