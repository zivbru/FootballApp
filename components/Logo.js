import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Logo = ({ crestUrl }) => {
  return (
    <View>
      <SvgUri
        width='110'
        height='110'
        source={{
          uri: crestUrl,
        }}
      ></SvgUri>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
