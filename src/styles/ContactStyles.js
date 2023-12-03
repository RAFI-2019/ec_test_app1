// styles/contactStyles.js
import { StyleSheet } from 'react-native';

export const contactStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F7942',
    paddingTop: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardContainer: {
    backgroundColor: '#e8f2e4',
    borderRadius: 4,
    width: 320,
    height: 100,
    shadowColor: '#b0b8b2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  contentText: {
    fontSize: 14,
    color: '#4F7942',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
