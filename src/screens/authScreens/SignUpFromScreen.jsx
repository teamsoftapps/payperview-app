import { Image, StyleSheet, Text, View, Pressable, TextInput, Keyboard, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import React, { useState } from 'react'
import signupbackground from "../../assets/signupbackground.png"
import overlay from "../../assets/overlay.png"
import plaindot from "../../assets/plaindot.png"
import profile from "../../assets/profile.png"
import visa from "../../assets/visa.png"
import colordot from "../../assets/colordot.png"
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from './LoginScreen'

const SignUpFromScreen = ({ navigation }) => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(['firstName,lastName,email,password,confirmPassword,Gender,birthDate,country,state,address,city,zipcode,cardNumber,expire,CVV']);
    const [showPassword, setShowPassword] = useState(true);



    const stepHandler = () => {
        setStep((prevState) => {

            return prevState + 1
        })
    }
    const backHandler = () => {
        setStep((prevState) => {
            if (step == 1) {
                return prevState
            }
            return prevState - 1
        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                    <Image source={signupbackground} style={styles.backgroundImage} />
                    <Image source={overlay} style={styles.backgroundImage} />

                    {/* header */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity

                            style={styles.headerLeft}
                            onPress={backHandler}
                        >
                            <Icon name="angle-left" size={26} color="#fff" />

                        </TouchableOpacity>

                        <View style={styles.headerCenter}>
                            <Text style={styles.headerCenterText}>Sign Up to continue</Text>
                        </View>
                    </View>

                    {/* Step */}
                    <View style={styles.stepContainer}>
                        <Text style={step == 1 ? styles.Active : styles.stepText}>Step 1</Text>
                        <Image source={step == 1 ? colordot : plaindot} style={styles.stepImage} />
                        <Text style={step == 2 ? styles.Active : styles.stepText}>Step 2</Text>
                        <Image source={step == 2 ? colordot : plaindot} style={styles.stepImage} />
                        <Text style={step == 3 ? styles.Active : styles.stepText}>Step 3</Text>
                    </View>


                    {/* form */}

                    {step == 1 &&

                        <View style={styles.inputContainer}>
                            <View style={styles.profileContainer}>
                                <Image source={profile} />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="john"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.firstName}
                                    onChangeText={firstName => setForm({ ...form, firstName: firstName })}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="doe"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.lastName}
                                    onChangeText={lastName => setForm({ ...form, lastName: lastName })}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="johndoe@gmail.com"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.email}
                                    onChangeText={email => setForm({ ...form, email: email })}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={showPassword ? true : false}
                                    cursorColor={'#191970'}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                    value={form.password}
                                    onChangeText={password => setForm({ ...form, password: password })}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={showPassword ? true : false}
                                    cursorColor={'#191970'}
                                    placeholder="Confirm Password"
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    blurOnSubmit={false}
                                    value={form.confirmPassword}
                                    onChangeText={confirmPassword => setForm({ ...form, confirmPassword: confirmPassword })}
                                />
                                <View style={styles.inputContainer2}>
                                    <TextInput style={[styles.input, { width: "50%" }]} value='gender' />
                                    <TextInput
                                        style={[styles.input, { width: "40%" }]}
                                        placeholder="dd/mm/yy"
                                        cursorColor={'#191970'}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={Keyboard.dismiss}
                                        value={form.birthDate}
                                        onChangeText={birthDate => setForm({ ...form, birthDate: birthDate })}
                                    />
                                </View>
                            </View>

                        </View>
                    }

                    {/* form2 */}

                    {step == 2 &&

                        <View style={styles.inputContainer}>

                            <View>
                                <TextInput
                                    style={styles.input2}
                                    placeholder="Country"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.country}
                                    onChangeText={country => setForm({ ...form, country: country })}
                                />
                                <TextInput
                                    style={styles.input2}
                                    placeholder="State"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.state}
                                    onChangeText={state => setForm({ ...form, state: state })}
                                />
                                <TextInput
                                    style={styles.input2}
                                    placeholder="address"
                                    cursorColor={'#191970'}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    value={form.address}
                                    onChangeText={address => setForm({ ...form, address: address })}
                                />

                                <View style={styles.inputContainer2}>
                                    <TextInput style={[styles.input2, { width: "50%" }]} placeholder="City"
                                        cursorColor={'#191970'}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        returnKeyType="next"
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        value={form.city}
                                        onChangeText={city => setForm({ ...form, city: city })}
                                    />
                                    <TextInput
                                        style={[styles.input2, { width: "35%" }]}
                                        placeholder="Zip code"
                                        cursorColor={'#191970'}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={Keyboard.dismiss}
                                        value={form.zipcode}
                                        onChangeText={zipcode => setForm({ ...form, zipcode: zipcode })}
                                    />
                                </View>
                            </View>

                        </View>
                    }


                    {step == 3 &&
                        <>

                            <View style={styles.stepcontainer3}>
                                <Image source={visa} style={styles.visaContainer} />
                            </View>
                            <View style={styles.inputContainer3}>
                                <View>
                                    <TextInput
                                        style={styles.input2}
                                        placeholder="Card Number"
                                        cursorColor={'#191970'}
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        returnKeyType="next"
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        value={form.cardNumber}
                                        onChangeText={cardNumber => setForm({ ...form, cardNumber: cardNumber })}
                                    />

                                    <View style={styles.inputContainer2}>
                                        <TextInput style={[styles.input2, { width: "50%" }]} placeholder="Expire Date"
                                            cursorColor={'#191970'}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                            returnKeyType="next"
                                            onSubmitEditing={Keyboard.dismiss}
                                            blurOnSubmit={false}
                                            value={form.expire}
                                            onChangeText={expire => setForm({ ...form, expire: expire })}
                                        />
                                        <TextInput
                                            style={[styles.input2, { width: "35%" }]}
                                            placeholder="CVV"
                                            cursorColor={'#191970'}
                                            autoCapitalize="none"
                                            keyboardType="default"
                                            returnKeyType="next"
                                            blurOnSubmit={false}
                                            onSubmitEditing={Keyboard.dismiss}
                                            value={form.CVV}
                                            onChangeText={CVV => setForm({ ...form, CVV: CVV })}

                                        />
                                    </View>
                                </View>

                            </View>
                        </>

                    }

                    {/* button */}

                    {step !== 3 &&
                        <TouchableOpacity>
                            <TouchableOpacity onPress={stepHandler}>
                                <LinearGradient
                                    start={{ x: 0.9, y: 0 }}
                                    end={{ x: 0.3, y: 0 }}
                                    colors={['#191970', '#8B30EF']}
                                    style={styles.btn}>
                                    <Text style={styles.btnText}>Next</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={[styles.boxContainer, { justifyContent: 'center' }]}>
                                <Text style={styles.label}>Do you have an account?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.label}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    }

                    {step == 3 &&

                        <TouchableOpacity>
                            <Pressable onPress={() => navigation.navigate('TermsAndConditions')}>
                                <LinearGradient
                                    start={{ x: 0.9, y: 0 }}
                                    end={{ x: 0.3, y: 0 }}
                                    colors={['#191970', '#8B30EF']}
                                    style={styles.btn}>
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </LinearGradient>
                            </Pressable>
                            <View style={[styles.boxContainer, { justifyContent: 'center' }]}>
                                <Text style={styles.label}>Do you have an account?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.label}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    }
                </TouchableOpacity>

            </View >
        </ScrollView>
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

    // header
    headerContainer: {
        marginHorizontal: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    headerLeft: {},
    headerCenter: {
        width: '90%',
        margin: 'auto',
    },
    headerCenterText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 600,
    },

    // step

    stepContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center"
    },
    stepText: {
        color: "#fff",
        fontSize: 14,
        marginHorizontal: 10
    },
    Active: {
        fontSize: 14,
        marginHorizontal: 10,
        color: "#76DC9F"
    },
    stepImage: {
        marginVertical: 8
    },
    // input

    inputContainer: {
        backgroundColor: "#FFF",
        margin: 25,
        marginTop: 40,
        padding: 10,
        borderRadius: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginTop: -60
    },
    inputContainer2: {
        display: "flex",
        flexDirection: "row",
    },
    input: {
        backgroundColor: "#F8F8F8",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
        borderRadius: 10
    },

    // btn

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
        borderRadius: 10,
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

    //step2 input
    input2: {
        backgroundColor: "#F8F8F8",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 15,
        borderRadius: 10
    },

    //step3 visa

    visaContainer: {
        width: "100%",
        resizeMode: "contain",
        height: 250,
        marginBottom: -180,
        zIndex: 100
    },
    inputContainer3: {
        backgroundColor: "#fff",
        margin: 25,
        marginTop: 40,
        padding: 10,
        paddingTop: 150,
        borderRadius: 15,
    },
    stepcontainer3: {
        zIndex: 10
    }

})