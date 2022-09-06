import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export interface IClothingAd {
  title: string;
  type: string;
  color: string;
  originalValue: number;
  currentValue: number;
  isDiscounted: boolean;
  isInStock: boolean;
}

export interface ClothingAdProps extends IClothingAd {
  numberCols: number;
}

export default function ClothingAd({
  title,
  type,
  color,
  originalValue,
  currentValue,
  isDiscounted,
  isInStock,
  numberCols,
}: ClothingAdProps) {
  const {width} = Dimensions.get('window');
  console.log(numberCols);
  return (
    <View
      style={[
        styles.container,
        {width: (width * 0.7) / numberCols, margin: 0.01 * width},
      ]}>
      <Text>{title}</Text>
      <Text>{type}</Text>
      <Text>{originalValue}</Text>
      <Text>{currentValue}</Text>
      <Text>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#52006A',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    borderColor: 'red',
    borderWidth: 0,
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
