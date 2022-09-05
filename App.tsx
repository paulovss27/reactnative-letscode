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
import ClothingAd, {IClothingAd} from './Components/ClothingAd';

const item1: IClothingAd = {
  title: 'Camisa social',
  type: 'Camisa',
  color: 'white',
  originalValue: 100,
  currentValue: 80,
  isDiscounted: true,
  isInStock: true,
};

const item2: IClothingAd = {
  title: 'Calça jeans',
  type: 'Calça',
  color: 'brown',
  originalValue: 150,
  currentValue: 125,
  isDiscounted: true,
  isInStock: true,
};

const item3: IClothingAd = {
  title: 'All-star cano longo',
  type: 'Calçado',
  color: 'purple',
  originalValue: 200,
  currentValue: 190,
  isDiscounted: true,
  isInStock: false,
};

const item4: IClothingAd = {
  title: 'Jaqueta Masculina Camurça ',
  type: 'Jaqueta',
  color: 'blue',
  originalValue: 300,
  currentValue: 300,
  isDiscounted: false,
  isInStock: true,
};

const items: IClothidAd[] = [item1, item2, item3, item4];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [list, setList] = useState(items);

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
          <ClothingAd
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
