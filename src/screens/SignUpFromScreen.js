import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import signupbackground from "../assets/signupbackground.png"
import overlay from "../assets/overlay.png"
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpFromScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={signupbackground} style={styles.backgroundImage} />
            <Image source={overlay} style={styles.backgroundImage} />
            <View style={styles.headerContainer}>
                <Pressable
                    style={styles.headerLeft}
                >
                    <Icon name="arrow-back-outline" size={26} color="#fff" />
                </Pressable>
                <View style={styles.headerCenter}>
                    <Text style={styles.headerCenterText}>Sign Up to continue</Text>
                </View>
            </View>
        </View >
    )
}

export default SignUpFromScreen

const styles = StyleSheet.create({
    container: {

    },
    backgroundImage: {
        width: "100%",
        // opacity: ,
        position: "absolute"
    },
    headerContainer: {
        marginHorizontal: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },
    headerLeft: {},
    headerCenter: {
        width: '90%',
        margin: 'auto',
    },
    headerCenterText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 600,
    },


})