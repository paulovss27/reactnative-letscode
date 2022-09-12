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

import {SafeAreaProvider} from 'react-native-safe-area-context';

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
  image: require('./resources/camisa_social_branca.jpg'),
  isFavorite: false,
};

const item2: IClothingAd = {
  title: 'Calça jeans',
  type: 'Calça',
  color: 'brown',
  originalValue: 150,
  currentValue: 125,
  isDiscounted: true,
  isInStock: true,
  image: require('./resources/calca_jeans_marrom.jpg'),
  isFavorite: false,
};

const item3: IClothingAd = {
  title: 'All-star cano longo',
  type: 'Calçado',
  color: 'purple',
  originalValue: 200,
  currentValue: 190,
  isDiscounted: true,
  isInStock: false,
  image: require('./resources/all_start_cano_longo.jpg'),
  isFavorite: false,
};

var yourPicture = require('./resources/jaqueta_denim_blue.jpg');

const item4: IClothingAd = {
  title: 'Jaqueta Masculina Denim ',
  type: 'Jaqueta',
  color: 'blue',
  originalValue: 300,
  currentValue: 300,
  isDiscounted: false,
  isInStock: true,
  image: require('./resources/jaqueta_denim_blue.jpg'),
  isFavorite: false,
};

const items: IClothingAd[] = [item1, item2, item4, item3];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [list, setList] = useState(items);
  const [numberCols, setNumberCols] = useState(1);
  console.log(Dimensions.get('window').height);
  function handleNumberCols() {
    if (numberCols === 1) {
      setNumberCols(2);
    } else {
      setNumberCols(1);
    }
  }

  function changeBookmark(index: number) {
    let current = list;
    current[index].isFavorite = !current[index].isFavorite;
    setList(_prev => [...current]);
  }

  return (
    <SafeAreaView style={{paddingBottom: 199.8}}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 2,
          alignContent: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '25%',
            height: '100%',
            flexDirection: 'row',
            paddingTop: 5,
          }}>
          <Text style={{color: '#333'}}>{'Swap '}</Text>
          <Text style={{color: '#13b6a0'}}>Vest</Text>
        </View>

        <TouchableOpacity>
          <View style={[styles.buttonView, {width: 100, margin: 0}]}>
            <Text style={[styles.text, {fontSize: 15}]}>Fazer Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleNumberCols}>
        <View style={styles.buttonView}>
          <Text style={styles.text}>Change Number of Columns</Text>
        </View>
      </TouchableOpacity>
      <View style={{borderColor: 'black', borderWidth: 4}}>
        <FlatList
          contentContainerStyle={{
            alignSelf: 'center',
            alignItems: 'center',
            width: '90%',
            // borderColor: 'pink',
            // borderWidth: 3,
          }}
          data={list}
          numColumns={numberCols}
          key={numberCols}
          renderItem={({item, index}) => (
            <ClothingAd
              numberCols={numberCols}
              {...item}
              setList={setList}
              changeBookmark={() => changeBookmark(index)}
            />
          )}
        />
      </View>
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
    color: '#F0F5F9',
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
    fontSize: 22,
  },
  buttonView: {
    margin: 5,
    alignSelf: 'center',
    width: '72%',
    borderWidth: 4,
    backgroundColor: 'black',
    borderColor: '#C9D6DF',
    borderRadius: 50,
    padding: 1,
  },
});

export default App;
