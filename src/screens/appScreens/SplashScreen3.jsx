import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import bg_image from '../../assets/bg_image.png';
import splash2 from '../../assets/splash2.png';

const SplashScreen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg_image}
        resizeMode="cover"
        style={styles.image}>
        <Image source={splash2} style={styles.header} />
        <View style={styles.textContainer}>
          <Text style={[styles.welcomeText, styles.textShadow]}>
            Welcome To
          </Text>
          <Text style={[styles.mainText, styles.textShadow]}>PayperView</Text>
          <Text style={[styles.lightText, styles.textShadow]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('login')}>
            <Text style={[styles.btnText]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: 'transparent'}]}>
            <Text
              style={[styles.btnText, styles.textShadow, {color: '#ffffff'}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 50,
    marginLeft: 30,
  },
  textContainer: {
    paddingLeft: 30,
    marginBottom: 120,
  },
  welcomeText: {
    marginTop: 100,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainText: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: 600,
  },
  lightText: {
    color: '#ffffff',
    // opacity: 0.7,
    fontSize: 13,
    width: 350,
  },
  btn: {
    width: '85%',
    backgroundColor: '#ffffff',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
