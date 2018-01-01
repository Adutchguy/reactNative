import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 375, height: 150}}
          source={require('./resources/imgs/cover.jpg')}
        />
      </View>
    );
  }
};
