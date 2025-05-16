import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const logo = require('../../assets/images/logo.png');
  
   

  return (


    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='contain'/>
      
      <Text style={styles.SignUpText}>Sign Up</Text>
      <View style = {styles.FirstView}>
        <Text style={styles.UsernameText}>Username</Text>
        <TextInput style={styles.UsernameInput}/>
      </View>

      <View style = {styles.SecondView}>
        <Text style={styles.EmailText}>Email</Text>
        <TextInput style={styles.EmailInput}/>
      </View>
      <View style = {styles.ThirdView}>
        <Text style={styles.PasswordText}>Password</Text>
        <TextInput style={styles.PasswordInput}/>
      </View>
      <Text style={styles.AccountText}> Already have an account? <Text style={styles.LogInButton}>Login</Text></Text>
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
  padding: '10%',
  backgroundColor: 'black'
  },
image: {
 width: 116,
 resizeMode: 'contain',
 marginTop: 30,


},
FirstView: {
  marginTop: 60,


},
SecondView: {
  marginTop: -5,
},
ThirdView: {
  marginTop: -5,
},
  SignUpText: {
    color: 'white',
    fontSize: 22,
    marginTop: 30,
    fontFamily: 'Poppins',
    
  },
  UsernameText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Poppins'
    
  },
  UsernameInput: {
    padding: 16,
    backgroundColor: '#1E1E2D',
    marginTop: 2,
    borderRadius: 10,
  },
  EmailText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Poppins'
    
  },
  
  EmailInput: {
    padding: 16,
    backgroundColor: '#1E1E2D',
    borderRadius: 10,
    
  },
  PasswordText: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Poppins'
    
  },
  
  PasswordInput: {
    padding: 16,
    backgroundColor: '#1E1E2D',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFA500',
  },
  AccountText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    marginTop: 20,
    
  },
  
  LogInButton: {
    color:  '#FFA300'
  },
  SignUpButton: {
    backgroundColor: '#FFA300',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 16,

  },
  SignUpButtonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
 
})