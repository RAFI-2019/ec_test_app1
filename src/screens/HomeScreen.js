
// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { homeStyles } from '../styles/HomeStyle';

const HomeScreen = () => {
  const elections = [
    {
      header: "12th National Parliamentary Election",
      text: "সাম্প্রতিক নির্বাচনের প্রার্থীদের নাম, পেশা, লিঙ্গ, সম্পদ, অপরাধ, এবং অন্যান্য পটভূমির বিবরণ",
    },
    
    {
      header: "11th National Parliamentary Election",
      text: "একাদশ জাতীয় সংসদ নির্বাচনের প্রার্থীদের নাম, পেশা, লিঙ্গ, সম্পদ, অপরাধ, এবং অন্যান্য পটভূমির বিবরণ",
    },

    {
      header: "10th National Parliamentary Election",
      text: "দশম জাতীয় সংসদ নির্বাচনের প্রার্থীদের নাম, পেশা, লিঙ্গ, সম্পদ, অপরাধ, এবং অন্যান্য পটভূমির বিবরণ",
    },

    {
      header: "9th National Parliamentary Election",
      text: "নবম জাতীয় সংসদ নির্বাচনের প্রার্থীদের নাম, পেশা, লিঙ্গ, সম্পদ, অপরাধ, এবং অন্যান্য পটভূমির বিবরণ",
    },
  ];

  const styles = homeStyles;

  const renderCarouselItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardHeader}>{item.header}</Text>
      <Text style={styles.cardText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Know Your Candidate (KYC)</Text>
      <Text style={styles.headerText}> জাতীয় সংসদ নির্বাচন </Text>
      <Text style={styles.headerText}> প্রাথির হলফনামা </Text>

      <View style={styles.centeredView}>
        <Image 
          source={require('../assets/images/map_color.png')} 
          style={styles.mapLogo} 
          resizeMode="contain"
        />
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          data={elections}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={300}
          containerCustomStyle={styles.carousel}
        />
      </View>

      <Footer />
    </View>
  );
};

export default HomeScreen;



