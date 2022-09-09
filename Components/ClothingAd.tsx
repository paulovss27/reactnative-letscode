/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';

export interface IClothingAd {
  title: string;
  type: string;
  color: string;
  originalValue: number;
  currentValue: number;
  isDiscounted: boolean;
  isInStock: boolean;
  image: any;
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
  image,
}: ClothingAdProps) {
  const {width} = Dimensions.get('window');
  console.log(numberCols);
  return (
    <View
      style={[
        styles.container,
        {
          width: (width * 0.7) / numberCols,
          margin: 0.01 * width,
          opacity: !isInStock ? 0.2 : 1,
        },
      ]}>
      <View
        style={{
          margin: 5,
          marginTop: 12,
          height: 150,
          width: '90%',
          backgroundColor: 'white',
          elevation: 2,
          borderRadius: 4,
        }}>
        <Image
          onError={({nativeEvent: {error}}) => {
            console.log(error);
          }}
          style={{
            height: undefined,
            width: undefined,
            resizeMode: 'center',
            flex: 1,
          }}
          source={image}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{type}</Text>
      {isDiscounted ? (
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {textDecorationLine: 'line-through'}]}>
            R${originalValue}
          </Text>
          <Text style={styles.text}>{' ➜ R$' + currentValue}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.text}>R${originalValue}</Text>
        </>
      )}

      <Text style={styles.text}>{type}</Text>
      <Text style={styles.text}>{color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#52006A',
    alignItems: 'center',
    padding: 0,
    margin: 50,
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
