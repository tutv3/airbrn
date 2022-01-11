import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [childen, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Adults</Text>
          <Text style={styles.text}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{adults}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.min(12, adults + 1))}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Children</Text>
          <Text style={styles.text}>Ages 2-12</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, childen - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{childen}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.min(12, childen + 1))}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Infants</Text>
          <Text style={styles.text}>Under 2</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.value}>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.min(12, infants + 1))}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Guests;
