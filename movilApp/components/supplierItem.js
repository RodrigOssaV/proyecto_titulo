import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Layout from "../styles/layout"

const supplierItem = ({supplier}) => {
    return (
        <Layout>
            <View style = {style.supplierContainer}>
                <Image style= {style.tinyLogo}
                    source = {require('../assets/supplier-avatar_32x32.png')}/>
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
        backgroundColor: '#D8D2CB',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 2,
        borderRadius: 15,
        /* opacity: 0.7 */
    },
    supplierTitle: {
        color: '#000000',
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: 50,
        height: 50
    }
});

export default supplierItem
