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
import LinearGradient from 'react-native-linear-gradient';

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





          <View style={styles.btnContainer}>

            <Pressable onPress={() => navigation.navigate('login')}>
              <LinearGradient
                start={{ x: 0.9, y: 0 }}
                end={{ x: 0.3, y: 0 }}
                colors={['#191970', '#8B30EF']}
                style={styles.btn}>
                <Text style={styles.btnText}>Agree</Text>
              </LinearGradient>
            </Pressable>
          </View>

          <View style={styles.cancelbtnContainer}>

            <Pressable onPress={() => navigation.navigate('login')}>
              <View
                style={styles.cancelbtn}>
                <Text style={styles.btnText}>Cancel</Text>
              </View>
            </Pressable>
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


  label: {
    color: '#ffffff',
    fontWeight: 600,
  },
  btn: {
    width: '80%',
    // background: linear-gradient("308.77deg", "#191970 5.46%", "#FF2CD1 159.86%"),
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    // marginTop: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
  boxContainer: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  btnContainer: {
    marginTop: 40,
    width: "100%",


  },
  cancelbtnContainer: {
    marginTop: 10,
    width: "100%"


  },
  cancelbtn: {
    width: '80%',
    // background: linear-gradient("308.77deg", "#191970 5.46%", "#FF2CD1 159.86%"),
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 1
  },

});
