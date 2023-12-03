// // /src/components/Footer.js

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Footer = () => {
//   const styles = StyleSheet.create({
//     bottomSection: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       alignItems: 'center',
//       paddingBottom: 2, // Adjust the padding as needed
//       backgroundColor: '#e8f2e4', // Set your preferred background color
//     },
//     tibLogo: {
//       width: 25,
//       height: 25,
//       marginBottom: 1, // Adjust the marginBottom as needed
//       marginTop: 5, // Adjust the marginTop as needed
//     },
//     footerText: {
//       fontSize: 12,
//       color: '#0c4da2',
//       fontWeight: 'bold',
//       marginBottom: 3,
//     },
//   });

//   return (
//     <View style={styles.bottomSection}>
//       <Image source={require('../assets/images/tib1.png')} style={styles.tibLogo} />
//       <Text style={styles.footerText}>Powered by Transparency International Bangladesh</Text>
//     </View>
//   );
// };

// export default Footer;


// /src/components/Footer.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  const styles = StyleSheet.create({
    bottomSection: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      paddingTop: 2, // Adjust the paddingTop as needed
      borderTopWidth: 1, // Add a border at the top
      borderTopColor: '#4F7942', // Set the border color
      backgroundColor: '#e8f2e4', // Set your preferred background color
      shadowColor: '#4F7942', // Set the shadow color
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    tibLogo: {
      width: 25,
      height: 25,
      marginBottom: 1, // Adjust the marginBottom as needed
      marginTop: 5, // Adjust the marginTop as needed
    },
    footerText: {
      fontSize: 12,
      color: '#0c4da2',
      fontWeight: 'bold',
      marginBottom: 3,
    },
  });

  return (
    <View style={styles.bottomSection}>
      <Image source={require('../assets/images/tib1.png')} style={styles.tibLogo} />
      <Text style={styles.footerText}>Powered by Transparency International Bangladesh</Text>
    </View>
  );
};

export default Footer;
