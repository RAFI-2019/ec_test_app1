// src/components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleHomePress}>
        <Image source={require('../assets/images/kyc_s.png')} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.headerText}>KYC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4F7942',
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e8f2e4',
  },
});

export default Header;
