import React, {useState, useEffect} from 'react';
import {View, TextIput, TextInput, Text} from 'react-native';
import SearchResultList from '../../components/SearchResultList';
import styles from './styles';
import axios from 'axios';
import {REACT_NATIVE_APP_GEOAPIFY_KEY} from '@env';
import {debounce} from '../../utils/timer';

const DestinationSearch = ({navigation}) => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    onSearchLocations('HCM');
  }, []);

  function onSearchLocations(input) {
    setError(null);
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${REACT_NATIVE_APP_GEOAPIFY_KEY}`;
    axios
      .get(url)
      .then(({data}) => {
        if (data.features.length > 0) {
          setList(data.features);
        }
      })
      .catch(error => {
        setError(error);
      });
  }

  const processOnSearch = inputData => {
    debounce(() => onSearchLocations(inputData), 1000)();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going ?"
        value={input}
        onChangeText={text => {
          setInput(text);
          processOnSearch(text);
        }}
      />
      {error && (
        <Text style={styles.error}>
          {error?.response?.data?.message ||
            error?.message ||
            error ||
            ' Error occuring'}
        </Text>
      )}
      <SearchResultList data={list} navigate={navigation.navigate} />
    </View>
  );
};

export default DestinationSearch;
