import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Ticket} from './ConcertCard';

interface Props {
  type: string;
}

export default function Button({type}: Props) {
  return (
    <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{type}</Text>
      <TouchableOpacity>
        <View style={styles.container}>
        <Text style={styles.text}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  container: {
    borderRadius: 100,
    borderWidth: 1,
    height: 18,
    width: 18,
    marginVertical: 1,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
