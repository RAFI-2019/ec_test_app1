// SearchScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchStyles from '../styles/SearchStyles';
import CompareScreen from '../screens/CompareScreen';


const SearchScreen = () => {
  const styles = SearchStyles;
  const navigation = useNavigation();

  const years = ['Parliamentary Elections-12th', 'Parliamentary Elections-10th', 'Parliamentary Elections-9th'];
  const divisions = ['Barishal', 'Chattogram', 'Dhaka', 'Khulna', 'Rajshahi', 'Rangpur', 'Mymensingh','Sylhet'];
  const districts = ['Dhaka','Gazipur','Chittagong','Dinajpur'];
  const parliamentarySeats = ['189 Dhaka-16','195 Gajipur-2', 'Seat 2', '007 Dinajpur-2'];
  const candidates = ['Md. Salah Uddin Sarkar', 'Candidate 2', 'Meah Sadiq Riaz'];

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedParliamentarySeat, setSelectedParliamentarySeat] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const handleSearch = () => {
    if (
      !selectedYear ||
      !selectedDivision ||
      !selectedDistrict ||
      !selectedParliamentarySeat ||
      !selectedCandidate
    ) {
      setErrorModalVisible(true);
    } else {
      navigation.navigate('InfoScreen', {
        selectedYear,
        selectedDivision,
        selectedDistrict,
        selectedParliamentarySeat,
        selectedCandidate,
      });
    }
  };

  const handleCompareCandidates = () => {
    if (
      !selectedYear ||
      !selectedDivision ||
      !selectedDistrict ||
      !selectedParliamentarySeat ||
      !selectedCandidate
    ) {
      setErrorModalVisible(true);
    } else {
      Alert.alert('Compare Candidates', 'Comparison functionality will be implemented here.');
      // Implement the logic for comparing candidates
      // You can navigate to a new screen or show a modal for comparison
      // For simplicity, I'll just show an alert for now
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Search" />

      <View style={styles.cardContainer}>
        <View style={styles.section}>
          <Text style={styles.text}>Election Year</Text>
          <ModalDropdown
            options={years}
            defaultValue={'Select Year'}
            onSelect={(index, value) => setSelectedYear(value)}
            style={styles.searchInputDropdown}
            textStyle={{ color: '#4F7942', fontWeight: 'bold' }}
            dropdownTextStyle={{ fontSize: 16, fontWeight: 'bold', color: '#4F7942', textAlign: 'center' }}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Division</Text>
          <ModalDropdown
            options={divisions}
            defaultValue={'Select Division'}
            onSelect={(index, value) => setSelectedDivision(value)}
            style={styles.searchInputDropdown}
            textStyle={{ color: '#4F7942', fontWeight: 'bold' }}
            dropdownTextStyle={{ fontSize: 16, fontWeight: 'bold', color: '#4F7942', textAlign: 'center' }}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>District</Text>
          <ModalDropdown
            options={districts}
            defaultValue={'Select District'}
            onSelect={(index, value) => setSelectedDistrict(value)}
            style={styles.searchInputDropdown}
            textStyle={{ color: '#4F7942', fontWeight: 'bold' }}
            dropdownTextStyle={{ fontSize: 16, fontWeight: 'bold', color: '#4F7942', textAlign: 'center' }}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Parliamentary Seats</Text>
          <ModalDropdown
            options={parliamentarySeats}
            defaultValue={'Select Parliamentary Seat'}
            onSelect={(index, value) => setSelectedParliamentarySeat(value)}
            style={styles.searchInputDropdown}
            textStyle={{ color: '#4F7942', fontWeight: 'bold' }}
            dropdownTextStyle={{ fontSize: 16, fontWeight: 'bold', color: '#4F7942', textAlign: 'center' }}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Candidate Name</Text>
          <ModalDropdown
            options={candidates}
            defaultValue={'Select Candidate'}
            onSelect={(index, value) => setSelectedCandidate(value)}
            style={styles.searchInputDropdown}
            textStyle={{ color: '#4F7942', fontWeight: 'bold' }}
            dropdownTextStyle={{ fontSize: 16, fontWeight: 'bold', color: '#4F7942', textAlign: 'center' }}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>

        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.buttonText}>Show Information</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCompareCandidates} style={styles.compareButton}>
          <Text style={styles.buttonText}>Compare Among Candidates</Text>
        </TouchableOpacity>

        <Modal visible={errorModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.errorText}>Please select an option from all dropdowns.</Text>
              <TouchableOpacity
                onPress={() => setErrorModalVisible(false)}
                style={styles.modalButton}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default SearchScreen;
