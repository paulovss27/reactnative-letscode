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
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  
  const [numberCols, setNumberCols] = useState(1);

  function handleNumberCols() {
    if (numberCols === 1) {
      setNumberCols(2);
    } else {
      setNumberCols(1);
    }
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity onPress={handleNumberCols}>
        <View style={{width: 150, borderWidth: 1}}>
          <Text style={styles.text}>Change Number of Columns</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          borderColor: 'blue',
          borderWidth: 3,
          padding: 0,
        }}
        data={list}
        numColumns={numberCols}
        key={numberCols}
        renderItem={({item, index}) => (
          <ClothingAd
            numberCols={numberCols}
            {...item}
            index={index === 0 || index === list.length - 1}
          />
        )}
      />
      <Image
        onError={({nativeEvent: {error}}) => {
          console.log(error);
        }}
        style={{height: 180, width: 300, resizeMode: 'contain'}}
        source={{
          uri: 'https://i.etsystatic.com/27269080/c/1500/1192/0/621/il/a1eba8/2850437611/il_680x540.2850437611_xhdo.jpg',
        }}
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
  text: {
    color: '#083D77',
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  }
});

export default App;
