import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import bg_image from '../../assets/bg_image.png';
import splash2 from '../../assets/splash2.png';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
const logoVideo = require("../../assets/logovideo.mp4")

const SplashScreen3 = ({ navigation }) => {
  const [screen, setScreen] = useState(1)
  // const logoVideos = logoVideo

  const myTimeout = setTimeout(myGreeting, 6000);

  function myGreeting() {
    setScreen(2)
    clearTimeout(myTimeout)
  }

  return (
    <>
      {screen == 1 &&
        <View style={{ flex: 1, backgroundColor: "#fff" }} >

          <VideoPlayer
            video={{ uri: "https://res.cloudinary.com/dtmgnujsp/video/upload/v1677116617/logovideo_ehenpe.mp4" }}
            videoWidth={1600}
            videoHeight={2800}
            autoplay={true}
            loop={true}
            showDuration={false}
            disableSeek={true}
            muted={true}
            controls={false}
            customStyles={{
              seekBar: {
                backgroundColor: '#fff'
              },
              seekBarProgress: {
                backgroundColor: '#fff'
              },
              controls: {
                display: 'none',
              },
              videoWrapper: {
                backgroundColor: "#fff"
              },
              thumbnail: {
                backgroundColor: "#FFF"
              },


            }}
          />

        </View>

      }







      {screen == 2 &&

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
                onPress={() => navigation.navigate('signupscreen')}

                style={[styles.btn, { backgroundColor: 'transparent' }]}>
                <Text
                  style={[styles.btnText, styles.textShadow, { color: '#ffffff' }]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      }
    </>
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
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  backgroundVideo: {
    flex: 1
  },


});
