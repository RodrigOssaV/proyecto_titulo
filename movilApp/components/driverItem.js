import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Layout from "../styles/layout";

const driverItem = ({driver}) => {

    const navigation = useNavigation();

    return (
        <Layout>
            <View style = {style.driverContainer}>
                <TouchableOpacity 
                    style = {style.box}
                    /* onPress = {()=> navigation.navigate('DriverFormScreen', {rut: driver.run})} */
                >
                    <Image style = {style.tinyLogo} 
                        source = {require('../assets/profile-avatar_32x32.png')}/>
                    <Text style = {style.driverTitle}>{driver.name} {driver.lastname}</Text>
                    <Text style = {style.driverTitle}>{driver.run}</Text>
                    <Text style = {style.driverTitle}>(+56) {driver.phone}</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
};

const style = StyleSheet.create({
    driverContainer: {
        width: '80%',
        backgroundColor: '#D8D2CB',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 2,
        borderRadius: 15,
        /* opacity: 0.7 */
    },
    driverTitle: {
        color: '#000000',
        fontWeight: 'bold',
        /* opacity: 1 */
    },
    rutTitle: {
        color: '#000000',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        opacity: 1
    },
    box: {
        alignItems: 'center'
    }
});

export default driverItem;

