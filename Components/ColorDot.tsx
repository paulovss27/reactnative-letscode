/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

export default function ColorDot() {
  const [hex, setHex] = useState('green');
  const [currentText, setCurrentText] = useState('');

  function handleChange(change: string) {
    let check = /^#([0-9a-f]{3}){1,2}$/i;
    if (check.test('#' + change)) {
      setHex(prev => '#'+change);
      console.log('foi', hex);
    }
  }
  return (
    <View>
      <TextInput
        value={currentText}
        onChangeText={current_text => setCurrentText(current_text)}
      />
      <TouchableOpacity
        style={{width: 10, height: 10, backgroundColor: 'blue'}}
        onPress={() => handleChange(currentText)}
      />
      <View
        style={{
          backgroundColor: hex,
          borderRadius: 50,
          width: 60,
          height: 60,
        }}
      />
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
