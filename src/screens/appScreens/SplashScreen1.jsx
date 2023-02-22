import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import bg_image from '../../assets/bg_image.png';
import logo from '../../assets/logo.png';

const SplashScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg_image}
        resizeMode="cover"
        style={styles.image}>
        <Image source={logo} style={styles.Logo} />
        <Text style={[styles.welcomeText, styles.textShadow]}>Welcome To</Text>
        <Text style={[styles.mainText, styles.textShadow]}>PayperView</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('splashscreen2')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.lightText, styles.textShadow]}>
            Terms of service
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginTop: 100,
  },
  welcomeText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff',
    fontSize: 45,
    fontWeight: 600,
  },
  btn: {
    width: '80%',
    backgroundColor: '#ffffff',
    height: 55,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#17B7BD',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  lightText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFFFF',
    opacity: 0.5,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
