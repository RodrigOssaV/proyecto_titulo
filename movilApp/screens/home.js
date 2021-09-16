import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import Layout from "../styles/layout";

const home = () => {

    const navigation = useNavigation();

    return (
        <Layout>
            <TouchableOpacity onPress = {() => navigation.navigate("DriverScreen")}>
                <Text style = {style.button}>Drivers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate("SupplierScreen")}>
                <Text style = {style.button}>Suppliers</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#a855f7',
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fae8ff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default home

