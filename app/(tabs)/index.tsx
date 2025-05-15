import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const logo = require('../../assets/images/logo.png');
  
   

  return (


    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <Text style={styles.SignUpText}>Sign Up</Text>
      <Text style={styles.UsernameText}>Username</Text>
      <TextInput style={styles.UsernameInput}
      />
      <Text style={styles.EmailText}>Email</Text>
      <TextInput style={styles.EmailInput}/>
      <Text style={styles.PasswordText}>Password</Text>
      <TextInput style={styles.PasswordInput}/>
      <Text style={styles.AccountText}> Already have an account?</Text>
      <Pressable style={styles.SignUpButton}>
      <Text style={styles.SignUpButtonText} >Sign Up</Text>
      </Pressable>

    
      
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'black'
  },
image: {
 flex: 1,
 width: 140,
 resizeMode: 'contain',
 marginLeft: 10,
 marginTop: 20,

},
  SignUpText: {
    padding: 10,
    color: 'white',
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 50,
    fontFamily: 'Poppins'
    
  },
  UsernameText: {
    padding: 5,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 20,
    fontFamily: 'Poppins'
    
  },
  UsernameInput: {
    padding: 10,
    width: '80%',
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 20,
    borderRadius: 10,
  },
  EmailText: {
    padding: 5,
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 40,
    fontFamily: 'Poppins'
  },
  EmailInput: {
    padding: 10,
    width: '80%',
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    
  },
  PasswordText: {
    padding: 5,
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 10,
    fontFamily: 'Poppins'
  },
  PasswordInput: {
    padding: 10,
    width: '80%',
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFA500'
  },
  AccountText: {
    color: 'white',
    padding: 1,
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 20,
    fontFamily: 'Poppins',
  },
  SignUpButton: {
    padding: 10,
    width: '80%',
    backgroundColor: '#FFA300',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 100, 
  },
  SignUpButtonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
 
})