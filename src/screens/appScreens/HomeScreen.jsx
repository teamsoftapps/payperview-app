import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import fourBoxImage from '../../assets/fourBox.png';
import girlAvatar from '../../assets/homeGirlAvatar.png';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.topBar}>
          <View style={styles.topleftImage}></View>
          <View style={styles.topMiddle}></View>
          <View style={styles.topRightRing}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
