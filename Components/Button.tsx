/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Ticket} from './ConcertCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

interface Props {
  type: string;
}

export default function Button({type}: Props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity style={styles.container}>
        <FontAwesomeIcon icon={faMinus} size={10} />
      </TouchableOpacity>
      <Text style={[styles.text, {paddingHorizontal: 4}]}>{type}</Text>
      <TouchableOpacity>
        <View style={styles.container}>
          <FontAwesomeIcon icon={faPlus} size={10} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    lineHeight: 18,
    textAlignVertical: 'center',
  },
  container: {
    borderRadius: 10,
    lineHeight: 18,
    borderWidth: 1,
    height: 18,
    width: 18,
    marginVertical: 2,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
