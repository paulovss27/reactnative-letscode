/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ConcertCard, {IConcertCard} from './Components/ConcertCard';

const example: IConcertCard = {
  bandName: 'Nome da Banda',
  country: 'País',
  city: 'Cidade',
  date: new Date(),
  ticket: {value: 20.01},
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [list, setList] = useState([example, example, example, example]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          borderColor: 'blue',
          borderWidth: 1,
        }}
        data={list}
        renderItem={({item, index}) => (
          <ConcertCard
            {...item}
            index={index === 0 || index === list.length - 1}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
