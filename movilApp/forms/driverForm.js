import React, {useState} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'

import Layout from "../styles/layout";
import { addDriver } from "../services/driver";

const driverForm = ({navigation}) => {

    const [driver, setDriver] = useState({
        rut: '',
        name: '',
        lastname: '',
        phone: ''
    })

    const handleChange = (name, value) => setDriver({...driver, [name]: value})

    const handleSubmit = async () => {
        /* console.log(driver) */
        await addDriver(driver)
        navigation.navigate('DriverScreen')
    }

    return (
        <Layout>
            <View style={style.container}>
                <TextInput
                    style = {style.input}
                    placeholder = 'Name driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('name', driver)}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Lastname driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('lastname', driver)}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'RUT driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('rut', driver)}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Phone driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('phone', driver)}
                />
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                    <Text style={style.buttonText}>Add driver</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    input: {
        width: '90%',
        height: '20',
        backgroundColor: 'white',
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 30,
        color: '#581c87',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5,
        opacity: 1
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#a855f7',
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    container: {
        width: '80%',
        backgroundColor: '#333333',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 2,
        borderRadius: 15,
        opacity: 0.9
    }
});

export default driverForm
