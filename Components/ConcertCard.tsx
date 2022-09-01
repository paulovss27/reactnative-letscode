/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from './Button';

export type Ticket = {
  type: 'Standard' | 'Vip' | 'Platinum';
  value: number;
};

export type TicketSimulation = Ticket & {amount: number};

export interface IConcertCard {
  bandName: string;
  country: string;
  city: string;
  date: Date;
  ticket: Ticket;
}

export interface IConcertCardSimulation {
  bandName: string;
  country: string;
  city: string;
  date: Date;
  ticket: TicketSimulation;
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
  const valores = [ticket.value, ticket.value * 1.5, ticket.value * 2];
  const strings = valores.map(value =>
    value.toFixed(2).toString().replace('.', ','),
  );
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles(index).container}>
        <View style={styles(index).subContainer}>
          <Text style={[styles(index).text, {color: '#1B263B'}]}>
            {bandName}
          </Text>
        </View>
        <View>
          <Text style={styles(index).text}>{country}</Text>
        </View>
        <Text style={styles(index).text}>{city}</Text>
        <Text style={styles(index).text}>
          {date.toISOString().substring(0, 10).split('-').reverse().join('/')}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={[styles(index).text]}>R${' ' + strings[0]}</Text>
          <Text>-</Text>
          <Text style={styles(index).text}>R${' ' + strings[1]}</Text>
          <Text>-</Text>
          <Text style={styles(index).text}>R${' ' + strings[2]}</Text>
        </View>
      </View>
      <View style={{marginTop: 20, marginLeft: 10}}>
        {['Standard', 'Vip', 'Platinum'].map(string => (
          <Button type={string} />
        ))}
      </View>
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
      paddingHorizontal: 4,
    },
  });
