import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Ticket = {
  value: number;
};

export interface IConcertCard {
  bandName: string;
  country: string;
  city: string;
  date: Date;
  ticket: Ticket;
}

export interface ConcertCardProps extends IConcertCard {
  index: boolean;
}

export default function ConcertCard({
  bandName,
  country,
  city,
  date,
  ticket,
  index,
}: ConcertCardProps) {
  return (
    <View style={styles(index).container}>
      <View style={styles(index).subContainer}>
        <Text style={[styles(index).text, {color: '#1B263B'}]}>{bandName}</Text>
      </View>
      <View>
        <Text style={styles(index).text}>{country}</Text>
      </View>
      <Text style={styles(index).text}>{city}</Text>
      <Text style={styles(index).text}>
        {date.toISOString().substring(0, 10).split('-').reverse().join('/')}
      </Text>
      <Text style={styles(index).text}>
        R${' ' + ticket.value.toString().replace('.', ',')}
      </Text>
    </View>
  );
}

const styles = (boo: boolean) =>
  StyleSheet.create({
    container: {
      width: 200,
      backgroundColor: 'white',
      marginTop: boo ? 10 : 5,
      marginBottom: boo ? 10 : 5,
      marginHorizontal: 10,
      borderRadius: 5,
      elevation: 5,
      shadowColor: '#52006A',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
    },
    subContainer: {
      borderColor: '#507DBC',
      borderBottomWidth: 1,
      width: '100%',
      margin: 0,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      backgroundColor: '#BBD1EA',
    },
    text: {
      color: '#083D77',
      fontFamily: 'sans-serif-condensed',
      textAlign: 'center',
    },
  });
