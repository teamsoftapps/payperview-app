import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import bg_image from "../assets/bg_image.png"
import splash2 from "../assets/splash2.png"
import section1 from "../assets/section1.png"
import section2 from "../assets/section2.png"

 
const SplashScreen2 = () => {
  return (
    <View style={styles.container}>
       <ImageBackground source={bg_image} resizeMode="cover" style={styles.image}>
       <Image source={splash2}  style={styles.header} />
       <Text style={styles.sectionText}>Choose Section</Text>
       <View style={styles.sectionContainer}>
       <TouchableOpacity>
        <Image source={section1} style={styles.section} />
       </TouchableOpacity>
       <TouchableOpacity>
        <Image source={section2} style={styles.section} />
       </TouchableOpacity>
       </View>
      <Text style={[styles.lightText,styles.textShadow]}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat </Text>
       </ImageBackground>
    </View>
  )
}

export default SplashScreen2

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      header:{
    position:"absolute",
    top:50,
      },
      sectionText:{
        color:"#ffffff",
        fontWeight:"bold",
        marginBottom:20
      },
      sectionContainer:{
        flexDirection:"row",
        gap:40
      },
      lightText:{
        color:"#ffffff",
        opacity:0.7,
        position:"relative",
        top:120,
        // width:"80%",
        textAlign:"center",
        fontSize:12,
        width:350
      },
      textShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      }
})