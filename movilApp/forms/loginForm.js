import React, {useState} from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Layout from "../styles/layout"
import { loginService } from "../services/login";

const loginForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigation = useNavigation()
    
    const handleChange = (name, value) => setUser({...user, [name]:value})

    const handleSubmit = async () => {
        await loginService(user)
        navigation.navigate('HomeScreen')
    }

    return (
        <Layout>
            <TextInput 
                style = {style.input}
                placeholder = 'Email'
                onChangeText = {(user) => handleChange('email', user)}
            />
            <TextInput 
                style = {style.input}
                placeholder = 'Password'
                onChangeText = {(user) => handleChange('password', user)}
                secureTextEntry
            />
            <TouchableOpacity 
                onPress = {handleSubmit}
                style = {style.buttonSignIn}
            >
                <Text style = {style.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </Layout>
    )
};

const style = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 30,
        color: '#ffffff',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5
    },
    buttonSignIn: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#10ac84',
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default loginForm;
