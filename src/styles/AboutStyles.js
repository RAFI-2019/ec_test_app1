// styles/AboutStyles.js

import { StyleSheet } from 'react-native';

export const aboutStyles = StyleSheet.create({
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
    borderRadius: 3,
    width: 320,
    shadowColor: '#b0b8b2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#4F7942',
  },
  fullScreenContent: {
    flex: 1,
  },
  fullContentText: {
    fontSize: 14,
    color: '#4F7942',
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredCard: {
    justifyContent: 'flex-start', // You can adjust this property if needed
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});
