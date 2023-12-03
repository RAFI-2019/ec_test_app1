// SearchStyles.js

import { StyleSheet } from 'react-native';

const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F7942',
    paddingTop: 1,
    padding: 15,
  },
  cardContainer: {
    backgroundColor: '#e8f2e4',
    borderRadius: 3,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  section: {
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  searchInputDropdown: {
    backgroundColor: '#e8f2e4',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#4F7942',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 2,
  },
  searchButton: {
    backgroundColor: '#4F7942',
    borderRadius: 3,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#e8f2e4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#e8f2e4',
    borderRadius: 4,
    padding: 10,
    width: '80%',
  },
  errorText: {
    color: '#eb2005',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#2f9632',
    borderRadius: 4,
    paddingVertical: 20,
    alignItems: 'center',
  },
  dropdownStyle: {
    width: 290,
    backgroundColor: '#e8f2e4',
    borderRadius: 4,
    borderColor: '#4F7942',
    borderWidth: 1,
  },
  compareButton: {
    backgroundColor: '#4F7942',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
});

export default SearchStyles;

