// AboutScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { aboutStyles } from '../styles/AboutStyles';

const AboutScreen = ({ navigation }) => {
  const styles = aboutStyles;

  const aboutData = [
    {
      title: 'About Us',
      content: 'Transparency International Bangladesh (TIB) fights corruption in Bangladesh through research, advocacy, and civic engagement. Established in 1996, TIB strives for transparency and accountability, promoting good governance.',
    },
    {
      title: 'Mission KYC',
      content: 'My text Know Your Candidate (KYC) initiative: The "Know Your Candidate" (KYC) initiative aims to develop a web-based interactive resource hub that provides information about election candidates based on their nomination filings and declarations. The target groups for this initiative are the 119 million voters in Bangladesh, as well as civil society organizations, think tanks, journalists, and research organizations. When the initiative is rolled out, interested voters will be able to use the hub to access information about candidates and compare them with one another, including their records, business interests, income, and wealth. They will also be able to check candidates\' contributions to their constituents and pledges. Journalists, think tanks, and civil society organizations will be able to use the hub to gain a broader understanding of the election candidates.',
    },
    {
      title: 'Vision',
      content: 'Our works will be different from the existing works as it will give us a comparative picture and overall analysis of candidates’ profile based on eight mandatory or key information.',
    },
  ];

  const [selectedContent, setSelectedContent] = useState(null);

  const handleItemPress = (content) => {
    setSelectedContent(content);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
  };

  return (
    <View style={styles.container}>
      <Header />

      {aboutData.map((aboutItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleItemPress(aboutItem)}
          style={styles.cardContainer}
        >
          <View style={styles.section}>
            <Text style={styles.text}>{aboutItem.title}</Text>
            <Text style={styles.contentText}>
              {aboutItem.content.length > 100 ? `${aboutItem.content.slice(0, 100)}...` : aboutItem.content}
            </Text>
            {aboutItem.content.length > 100 && (
              <TouchableOpacity onPress={() => handleItemPress(aboutItem)} style={styles.seeMoreButton}>
                <Text style={{ color: 'red', fontWeight: 'bold', }}>See more</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      ))}

      <Footer />

      {selectedContent && (
        <FullContentModal
          visible={selectedContent !== null}
          content={selectedContent}
          onClose={handleCloseModal}
        />
      )}
    </View>
  );
};

const FullContentModal = ({ visible, content, onClose }) => {
  const styles = aboutStyles;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.fullScreenContainer}>
        <Header />
        <ScrollView
          contentContainerStyle={styles.centeredContent}
          style={styles.fullScreenContent}
        >
          <View style={[styles.cardContainer, styles.centeredCard]}>
            <View style={styles.section}>
              <Text style={styles.fullContentText}>{content.title}</Text>
              <Text style={styles.fullContentText}>{content.content}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>See less</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    </Modal>
  );
};

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AboutStack;
