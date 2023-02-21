import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import loginScreen from "../assets/loginScreen_bg.png"
import logo from "../assets/logo.png"
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
    <ImageBackground transparent={true} source={loginScreen} resizeMode="cover" style={styles.image}>
    <Image source={logo}  style={styles.Logo} />
   <Text style={styles.mainHeading} >{'PayperView'.toUpperCase()}</Text>
   <Text style={styles.heading}>Sign in to continue</Text>
   <View style={styles.inputContainer}>
     <TextInput style={styles.input} placeholderTextColor="#B9B9B9" placeholder="Email" />
       <TextInput secureTextEntry={true} placeholderTextColor="#B9B9B9" style={styles.input} placeholder="Password" />
   </View>
<View style={styles.checkBoxContainer}>
   <CheckBox
     disabled={false}
     value={toggleCheckBox}
     onValueChange = {(newValue)=>setToggleCheckBox(newValue)}
     tintColors={{ true: '#9323A3', false: '#ffffff' }}
     />
    <Text style={styles.label}>Remember me</Text>
     </View>

     <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnText]}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity:0.5,
   
  },
  Logo:{
    opacity:1,
    // overflow:'hidden'
    // position:"absolute",
    // top:100,
    marginLeft:"auto",
    marginRight:"auto",
  },
  mainHeading:{
    color:"#ffffff",
    textAlign:"center",
    fontSize:25,
    marginTop:10,
    fontWeight:"bold",
    marginBottom:30
  },
  heading:{
    color:"#ffffff",
    textAlign:"center",
    fontSize:20,
    marginTop:10,
    fontWeight:"bold",
    marginVertical:20
  },
  inputContainer:{
    backgroundColor:"#FFFFFF",
    width:"80%",
    marginLeft:"auto",
    marginRight:"auto",
    paddingHorizontal:60,
    paddingVertical:10,
    borderRadius:10,
    overflow:"hidden",
    gap:15
  },
  input:{
    // borderWidth:1,
  },
  checkBoxContainer:{
    flexDirection:'row',
    width:"80%",
    marginLeft:"auto",
    marginRight:"auto",
    alignItems:"center",
    marginTop:10,
    gap:8
  },
  label:{
    color:"#ffffff",
    fontWeight:600
  },
  btn: {
    width: '85%',
    backgroundColor: '#ffffff',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor:"#fff"
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
})