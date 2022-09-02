/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function ColorDot() {
  const [hex, setHex] = useState('green');
  const [currentText, setCurrentText] = useState('');

  function handleChange(change: string) {
    let check = /^#([0-9a-f]{3}){1,2}$/i;
    if (check.test('#' + change)) {
      setHex(prev => '#' + change);
      console.log('foi', hex);
    } else {
      if (change.length === 6) {
        Alert.alert('HEX Inválido', 'Digite outro');
      }
    }
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', margin:10}}>
        <Text style={styles.text}>#</Text>
        <TextInput
          style={styles.input}
          value={currentText}
          maxLength={6}
          placeholder="Digite o código HEX:"
          onChangeText={current_text => {
            setCurrentText(current_text);
            handleChange(current_text);
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: hex,
          borderRadius: 50,
          width: 60,
          height: 60,
          margin: 10,
          borderWidth: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
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
    fontSize: 25,
    margin: 5,
  },
  input: {
    borderWidth: 1,
    width: '37%',
    height: 40,
  },
});
