// // InfoScreen.js

// import React from 'react';
// import { View, Text } from 'react-native';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { infoStyles } from '../styles/InfoStyles'; // Import InfoStyles

// const InfoScreen = ({ route }) => {
//   const styles = infoStyles; // Use infoStyles for styling
//   const {
//     selectedYear,
//     selectedDivision,
//     selectedDistrict,
//     selectedParliamentarySeat,
//     selectedCandidate,
//   } = route.params;

//   // Replace the following data with actual information
//   const candidateInfo = {
//     Candidate_Name: 'John Doe',
//     Candidate_Profession: 'Engineer',
//     Other_Profession: 'Entrepreneur',
//     Historical_MP_Status: 'Former MP',
//     Present_Legal_Allegations: 'None',
//     Previous_Legal_Allegations: 'None',
//     Education: 'Bachelor in Computer Science',
//     Annual_Income: '$70,000',
//   };

//   const infoData = [
//     {
//       title: 'General Information',
//       data: [
//         { label: 'Candidate Name', value: candidateInfo.Candidate_Name },
//         { label: 'Candidate Profession', value: candidateInfo.Candidate_Profession },
//         { label: 'Other Profession', value: candidateInfo.Other_Profession },
//         { label: 'Historical MP Status', value: candidateInfo.Historical_MP_Status },
//         { label: 'Education', value: candidateInfo.Education },
//       ],
//     },
//     {
//       title: 'Assets Information',
//       data: [{ label: 'Annual Income', value: candidateInfo.Annual_Income }],
//     },
//     {
//       title: 'Criminal Cases Information',
//       data: [
//         { label: 'Present Legal Allegations', value: candidateInfo.Present_Legal_Allegations },
//         { label: 'Previous Legal Allegations', value: candidateInfo.Previous_Legal_Allegations },
//       ],
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.centerContainer}>
//         {infoData.map((card, index) => (
//           <View style={styles.cardContainer} key={index}>
//             <Text style={styles.heading}>{card.title}</Text>
//             {card.data.map((item, itemIndex) => (
//               <View style={styles.rowContainer} key={itemIndex}>
//                 <Text style={styles.label}>{item.label}</Text>
//                 <Text style={styles.value}>{item.value}</Text>
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//       <Footer />
//     </View>
//   );
// };

// export default InfoScreen;


// InfoScreen.js

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { infoStyles } from '../styles/InfoStyles'; // Import InfoStyles

const InfoScreen = ({ route }) => {
  const styles = infoStyles; // Use infoStyles for styling
  const {
    selectedYear,
    selectedDivision,
    selectedDistrict,
    selectedParliamentarySeat,
    selectedCandidate,
  } = route.params;

  // Replace the following data with actual information
  const candidateInfo = {
    Candidate_Name: 'John Doe',
    Address: '123 Main St, Cityville',
    Education: 'Bachelor in Computer Science',
    Present_Legal_Allegations: 'None',
    Previous_Legal_Allegations: 'None',
    Profession: 'Engineer',
    Source_of_Income: 'Salary',
    Tangible_Assets: '$500,000',
    Intangible_Assets: '$300,000',
    Liabilities_Debts: '$100,000',
    Historical_MP_Status: 'Former MP',
    Loan_Info: 'No outstanding loans',
  };

  const infoData = [
    {
      title: 'General Information',
      data: [
        { label: 'Candidate Name', value: candidateInfo.Candidate_Name },
        { label: 'Address', value: candidateInfo.Address },
        { label: 'Education', value: candidateInfo.Education },
        { label: 'Present Legal Allegations', value: candidateInfo.Present_Legal_Allegations },
        { label: 'Previous Legal Allegations', value: candidateInfo.Previous_Legal_Allegations },
        { label: 'Profession', value: candidateInfo.Profession },
        { label: 'Source of Income', value: candidateInfo.Source_of_Income },
      ],
    },
    {
      title: 'Assets and Liabilities Information',
      data: [
        { label: 'Tangible Assets', value: candidateInfo.Tangible_Assets },
        { label: 'Intangible Assets', value: candidateInfo.Intangible_Assets },
        { label: 'Liabilities - Debts', value: candidateInfo.Liabilities_Debts },
      ],
    },
    {
      title: 'Criminal Cases Information',
      data: [
        { label: 'Historical MP Status', value: candidateInfo.Historical_MP_Status },
        { label: 'Loan Info', value: candidateInfo.Loan_Info },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.centerContainer}
      >
        {infoData.map((card, index) => (
          <View style={styles.cardContainer} key={index}>
            <Text style={styles.heading}>{card.title}</Text>
            {card.data.map((item, itemIndex) => (
              <View style={styles.rowContainer} key={itemIndex}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default InfoScreen;
