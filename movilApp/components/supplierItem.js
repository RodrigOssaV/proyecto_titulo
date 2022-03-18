import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Layout from "../styles/layout"

const supplierItem = ({supplier}) => {
    return (
        <Layout>
            <View style = {style.supplierContainer}>
                <Text style={style.supplierTitle}>{supplier.rut}</Text>
                <Text style={style.supplierTitle}>{supplier.razon_social}</Text>
                <Text style={style.supplierTitle}>{supplier.total_amount}</Text>
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    supplierContainer: {
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
    supplierTitle: {
        color: '#ffffff'
    }
});

export default supplierItem
