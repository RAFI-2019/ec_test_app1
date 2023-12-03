
// // styles/infoStyles.js

// import { StyleSheet } from 'react-native';

// const infoStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4F7942',
//     paddingTop: 1,
//     paddingHorizontal: 10,
//   },
  
//   centerContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 80, // Add paddingBottom to create space for the footer
//   },

//   cardContainer: {
//     backgroundColor: '#e8f2e4',
//     borderRadius: 2,
//     width: 320, // Adjust the width as needed
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     shadowColor: '#b0b8b2',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3,
//     elevation: 5,
//     marginBottom: 10,
//     marginTop: 10,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     width: '100%',
//     backgroundColor: '#d3f4cb', // Set the background color for rows
//   },
//   label: {
//     fontSize: 14,
//     color: '#4F7942',
//   },
//   value: {
//     fontSize: 14,
//     color: '#4F7942',
//     fontWeight: 'bold',
//   },
//   footerSpacer: {
//     marginBottom: 100, // Adjust the margin as needed
//   },
// });

// export { infoStyles };

// styles/infoStyles.js

import { StyleSheet } from 'react-native';

const infoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F7942',
    paddingTop: 1,
    paddingHorizontal: 10,
  },
  
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // Add paddingBottom to create space for the footer
  },

  cardContainer: {
    backgroundColor: '#e8f2e4',
    borderRadius: 2,
    width: 320, // Adjust the width as needed
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    shadowColor: '#b0b8b2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // **************
    paddingVertical: 6,
    width: '100%',
    backgroundColor: '#d3f4cb', // Set the background color for rows
  },
  label: {
    fontSize: 14,
    color: '#4F7942',
  },
  value: {
    fontSize: 14,
    color: '#4F7942',
    fontWeight: 'bold',
  },
  footerSpacer: {
    marginBottom: 50, // Adjust the margin as needed
  },
  scrollView: {
    flex: 1,
    
  },
});

export { infoStyles };
