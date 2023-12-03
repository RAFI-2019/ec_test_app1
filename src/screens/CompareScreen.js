// CompareScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const CompareScreen = ({ route }) => {
  const {
    selectedYear,
    selectedDivision,
    selectedDistrict,
    selectedParliamentarySeat,
    selectedCandidate,
  } = route.params;

  // You can fetch additional information for the selected candidate here

  return (
    <View>
      <Text>Comparison Screen</Text>
      {/* Display the information for the selected candidate */}
      <Text>{`Year: ${selectedYear}`}</Text>
      <Text>{`Division: ${selectedDivision}`}</Text>
      <Text>{`District: ${selectedDistrict}`}</Text>
      <Text>{`Parliamentary Seat: ${selectedParliamentarySeat}`}</Text>
      <Text>{`Candidate: ${selectedCandidate}`}</Text>
      {/* Add additional fields as needed for comparison */}
    </View>
  );
};

export default CompareScreen;
