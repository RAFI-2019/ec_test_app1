
// src/screens/ContactScreen.js
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contactStyles } from '../styles/ContactStyles';

const ContactScreen = () => {
  const styles = contactStyles;

  const contactData = [
    {
      title: 'Address',
      content: 'MIDAS Centre (Levels 4 & 5) | House 5, Road 16(new), 27(Old), Dhanmondi, Dhaka1209, Bangladesh',
      onPress: null,
    },
    {
      title: 'Phone Number',
      content: '+8802-48113032',
      onPress: () => Linking.openURL('tel:+8802-48113032'),
    },
    {
      title: 'Fax Number',
      content: '+8802-48113101',
      onPress: () => Linking.openURL('tel:+8802-48113101'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      {contactData.map((contact, index) => (
        <View style={styles.cardContainer} key={index}>
          <View style={styles.section}>
            <Text style={styles.text}>{contact.title}</Text>
            <Text style={styles.contentText} onPress={contact.onPress}>
              {contact.content}
            </Text>
          </View>
        </View>
      ))}
      <Footer />
    </View>
  );
};

export default ContactScreen;

