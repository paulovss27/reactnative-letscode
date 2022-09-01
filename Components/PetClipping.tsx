/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

type Porte = 'Pequeno' | 'Médio' | 'Grande';

export default function PetClipping() {
  const precos = {
    Pequeno: 'R$ 15,00',
    Médio: 'R$ 24,00',
    Grande: 'R$ 35,00',
  };

  const tempos = {
    Pequeno: '20 mins',
    Médio: '35 mins',
    Grande: '50 mins',
  };

  const [porte, setPorte] = useState<Porte | ''>('');

  function handlePorte(innerPorte: Porte) {
    setPorte(innerPorte);
  }
  return (
    <View>
      <View>
        <Text>Escolha o tamanho:</Text>
        <View style={{flexDirection: 'row'}}>
          {(Object.keys(precos) as Array<keyof typeof tempos>).map(
            innerPorte => (
              <TouchableOpacity
                onPress={() => handlePorte(innerPorte)}
                style={{
                  paddingHorizontal: 4,
                  borderWidth: 1,
                  margin: 2,
                  borderRadius: 5,
                  backgroundColor:
                    porte === innerPorte ? 'lightgrey' : 'transparent',
                }}>
                <Text>{innerPorte}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>

      {porte === '' || (
        <React.Fragment>
          <Text>Preço:{' ' + precos[porte]}</Text>
          <Text>Tempo Previsto:{' ' + tempos[porte]}</Text>
        </React.Fragment>
      )}
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
