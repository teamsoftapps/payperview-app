import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import backgroundImage from '../../assets/termsBackground.png';
import dotImage from '../../assets/Dot.png';
// import LinearGradient from 'react-native-linear-gradient';

export default function TermsAndConditions() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={backgroundImage}
        resizeMode="cover">
        <View style={styles.mainContainer}>
          <Text style={styles.termsText}>Terms and Condition</Text>

          <View>
            {[1, 2, 3].map(id => (
              <View style={styles.inlineBullet} key={id}>
                <Image source={dotImage} />
                <Text style={styles.inlineText}>
                  Donec molestie ultricies dolor,
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.termsMainText}>
            Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
            Donec at mattis lacus. Duis cursus orci a convallis condimentum.
            Phasellus gravida felis leo.
          </Text>

          <View>
            {/* <Pressable>
              <LinearGradient
                start={{x: 0.9, y: 0}}
                end={{x: 0.3, y: 0}}
                colors={['#191970', '#8B30EF']}
                style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </LinearGradient>
              <View style={[styles.boxContainer, {justifyContent: 'center'}]}>
                <Text style={[styles.label, styles.textShadow]}>
                  Didn’t have an account?
                </Text>

                <TouchableOpacity>
                  <Text style={styles.label}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </Pressable> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bgImage: {
    flex: 1,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flex: 1,
  },
  termsText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 100,
  },
  inlineBullet: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inlineText: {
    marginLeft: 15,
    color: '#Fff',
  },
  termsMainText: {
    color: '#fff',
    textAlign: 'center',
    width: 300,
  },
  agreeButton: {},
});
