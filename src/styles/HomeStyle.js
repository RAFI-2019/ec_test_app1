// styles/HomeStyles.js
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F7942',
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 1, // Adjust the marginVertical value here
  },
  mapLogo: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  carouselContainer: {
    width: '90%',
    alignItems: 'center',
  },
  carousel: {
    width: '100%',
    height: 250,
  },
  cardContainer: {
    backgroundColor: '#e8f2e4',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  cardHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#4F7942',
    // textAlign: 'center',
  },
});
