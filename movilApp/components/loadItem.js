import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Layout from '../styles/layout';

const loadItem = ({load}) => {
    return (
        <Layout>
            <View style = {style.driverContainer}>                
                <Text style = {style.driverTitle}>RUT: {load.rut_driver}</Text>
                <Text style = {style.driverTitle}>DATE: {load.date_load}</Text>
                <Text style = {style.driverTitle}>LOAD: {load.amount_load}</Text>
                <Text style = {style.driverTitle}>SUPPLIER: {load.id_supplier}</Text>
            </View>
        </Layout>
    )
}

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
        color: '#ffffff',
        fontWeight: 'bold',
        /* opacity: 1 */
    },
});

export default loadItem;
