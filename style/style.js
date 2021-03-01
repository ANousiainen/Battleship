import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    backgroundColor: '#000080',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#000080',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    justifyContent: 'center',
    flex:1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameinfo: {
    backgroundColor: '#4682B4',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color:"#FFF5EE",
    marginBottom: 5,
  },
  row: {
    margin: 20,
    padding: 10
  },
  flex: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 20,
    backgroundColor: "#4682B4",
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#FFF5EE",
    fontSize: 30
  }
});