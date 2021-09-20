import React, {useState, useEffect} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'

import Layout from "../styles/layout";
import { addDriver, updateDriver, getDriver } from "../services/driver";

const driverForm = ({navigation, route}) => {

    const [driver, setDriver] = useState({
        rut: '',
        name: '',
        lastname: '',
        phone: ''
    });

    const [editing, setEditing] = useState(false);

    const handleChange = (name, value) => setDriver({...driver, [name]: value});

    const handleSubmit = async () => {
        /* console.log(driver) 
        await addDriver(driver);
        navigation.navigate('DriverScreen'); */
        if (!editing) {
            await addDriver(driver);
        } else {
            await updateDriver(route.params.rut, driver);
        }
        navigation.navigate('DriverScreen');
    };

    useEffect(()=>{
        if (route.params && route.params.rut){
            navigation.setOptions({headerTitle: 'Update driver'});
            setEditing(true);

            (async () => {
                const driver = await getDriver(route.params.rut);
                setDriver({
                    rut: driver.rut,
                    name: driver.name,
                    lastname: driver.lastname,
                    phone: driver.phone
                })
            })();

        }
    },[]);

    return (
        <Layout>
            <View style={style.container}>
                <TextInput
                    style = {style.input}
                    placeholder = 'Name driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('name', driver)}
                    value = {driver.name}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Lastname driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('lastname', driver)}
                    value = {driver.lastname}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'RUT driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('rut', driver)}
                    value = {driver.rut}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Phone driver'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('phone', driver)}
                    value = {driver.phone.toString()}
                />
                {
                    !editing ? (
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.buttonText}>Add driver</Text>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.buttonText}>Update driver</Text>
                        </TouchableOpacity>
                    )
                }
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
        /* opacity: 1 */
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
