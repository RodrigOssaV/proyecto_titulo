import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Layout from "../styles/layout";

const driverItem = ({driver}) => {
    return (
        <Layout>
            <View style = {style.driverContainer}>
                <Image
                    style = {style.tinyLogo}
                    source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <Text style = {style.driverTitle}>{driver.name} {driver.lastname}</Text>
                {/* <Text style = {style.driverTitle}>{driver.lastname}</Text> */}
                <Text style = {style.rutTitle}>{driver.rut}</Text>
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    driverContainer: {
        width: '80%',
        backgroundColor: '#333333',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 2,
        borderRadius: 15,
        opacity: 0.7
    },
    driverTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        opacity: 1
    },
    rutTitle: {
        color: '#ffffff',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default driverItem

