import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import Layout from "../styles/layout";

const home = () => {

    const navigation = useNavigation();

    return (
        <Layout>
            <TouchableOpacity onPress = {() => navigation.navigate("DriverScreen")}>
                <Text style = {style.button}>Repartidores</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate("SupplierScreen")}>
                <Text style = {style.button}>Proveedores</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate("LoadScreen")}>
                <Text style = {style.button}>Asignar Carga</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#1C658C',
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fae8ff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default home

