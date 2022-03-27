import React, {useState, useEffect} from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native'

import Layout from "../styles/layout";
import { addDriver, updateDriver, getDriver } from "../services/driver";

const driverForm = ({navigation, route}) => {

    const [driver, setDriver] = useState({
        run: '',
        name: '',
        lastname: '',
        phone: '',
        type_driver: ''
        
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
            await updateDriver(route.params.run, driver);
        }
        navigation.navigate('DriverScreen');
    };

    useEffect(()=>{
        if (route.params && route.params.run){
            navigation.setOptions({headerTitle: 'Update driver'});
            setEditing(true);

            (async () => {
                const driver = await getDriver(route.params.run);
                setDriver({
                    run: driver.run,
                    name: driver.name,
                    lastname: driver.lastname,
                    phone: driver.phone,
                    type_driver: driver.type_driver
                })
            })();

        }
    },[]);

    return (
        <Layout>
            <View style={style.container}>
                <TextInput
                    style = {style.input}
                    placeholder = 'Nombre'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('name', driver)}
                    value = {driver.name}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Apellido'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('lastname', driver)}
                    value = {driver.lastname}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'RUN'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('run', driver)}
                    value = {driver.rut}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Teléfono'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('phone', driver)}
                    value = {driver.phone.toString()}
                />
                <TextInput
                    style = {style.input}
                    placeholder = 'Tipo'
                    placeholderTextColor='#546574'
                    onChangeText = {(driver) => handleChange('type_driver', driver)}
                    value = {driver.type_driver}
                />
                {
                    !editing ? (
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.buttonText}>Actualizar</Text>
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
        backgroundColor: '#1C658C',
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
    },
    tinyLogo: {
        width: 50,
        height: 50,
        opacity: 1,
    },
});

export default driverForm
