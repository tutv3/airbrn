import React, {useState} from 'react';
import {View, TextIput, TextInput} from 'react-native';
import SearchResultList from '../../components/SearchResultList';
import styles from './styles';
import searchResults from '../../../assets/data/search';

const DestinationSearch = () => {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going ?"
        value={input}
        onChangeText={text => setInput(text)}
      />
      <SearchResultList data={searchResults} />
    </View>
  );
};

export default DestinationSearch;
