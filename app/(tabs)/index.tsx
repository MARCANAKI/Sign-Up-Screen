import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


const App = () => {
  
   

  return (


    <View style={styles.container}>
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
  SignUpText: {
    padding: 10,
    color: 'white',
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 180,
    fontFamily: 'Poppins'
    
  },
  UsernameText: {
    padding: 5,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 150,
    fontFamily: 'Poppins'
    
  },
  UsernameInput: {
    padding: 10,
    width: '80%',
    backgroundColor: 'gray',
    marginLeft: 10,
    marginRight: 30,
    marginTop: 5,
    borderRadius: 10,
  },
  EmailText: {
    padding: 5,
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 20,
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
    marginTop: 20,
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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 10, 
  },
  SignUpButtonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
 
})