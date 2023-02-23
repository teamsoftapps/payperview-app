import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import loginScreen from '../../assets/loginScreen_bg.png';
import logo from '../../assets/logo.png';
import overlay2 from '../../assets/overlay2.png';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  //function for dropDown rendring
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownText}>Test 1</Text>
          <Text style={styles.dropdownText}>Test 2</Text>
          <Text style={styles.dropdownText}>Test 3</Text>
          <Text style={styles.dropdownText}>Test 4</Text>
          <Text style={styles.dropdownText}>Test 5</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        transparent={true}
        source={loginScreen}
        resizeMode="cover"
        style={styles.image}>
        <Image source={overlay2} style={styles.overlay} />
        <Image source={logo} style={styles.Logo} />
        <Text style={styles.mainHeading}>{'PayperView'.toUpperCase()}</Text>
        <Text style={styles.heading}>Sign in to continue</Text>
        <View style={styles.inputContainer}>
          <Pressable
            style={[styles.select, styles.textShadow]}
            onPress={toggleDropdown}>
            {renderDropdown()}
            <Text
              style={{
                fontWeight: 'bold',
                position: 'relative',
                color: '#B9B9B9',
              }}>
              Select User
            </Text>
          </Pressable>
          <TextInput
            style={styles.input}
            // placeholderTextColor="#B9B9B9"
            placeholder="Email"
          />
          <TextInput
            secureTextEntry={true}
            // placeholderTextColor="#B9B9B9"
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#9323A3', false: '#ffffff'}}
          />
          <Text style={styles.label}>Remember me</Text>
        </View>

        <Pressable
          // style={styles.btn}
          onPress={() => navigation.navigate('login')}>
          <LinearGradient
            start={{x: 0.9, y: 0}}
            end={{x: 0.3, y: 0}}
            colors={['#191970', '#8B30EF']}
            style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </LinearGradient>
          {/* <Text style={[styles.btnText]}>Login</Text> */}
        </Pressable>

        <Text  style={styles.textContainer} >
          <Text style={styles.text}>Didn’t have an account?</Text>
          <TouchableOpacity>
           <Text style={styles.text}>Sign Up</Text> 
            </TouchableOpacity>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.8)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity: 0.8,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  Logo: {
    opacity: 1,
    // overflow:'hidden'
    // position:"absolute",
    // top:100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainHeading: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 600,
    marginBottom: 30,
  },
  heading: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 500,
    marginVertical: 20,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    gap: 15,
  },
  input: {
    // borderWidth:1,
    zIndex: -1,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  label: {
    color: '#ffffff',
    fontWeight: 600,
  },
  btn: {
    width: '85%',
    backgroundColor: '#ffffff',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
    fontSize:16
  },
  dropdownContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
  },
  dropdownText: {
    backgroundColor: '#ffffff',
    zIndex: 100,
    paddingLeft: 10,
    paddingBottom: 2,
  },
  textContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:10
    // textAlign:"center",
  },
  text:{
    color:"#ffffff",
    marginTop:10
  }
});
