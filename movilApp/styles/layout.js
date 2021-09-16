import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

const layout = ({children}) => {
    return <View style={styles.container}>
                <StatusBar backgroundColor='#222f3e'/>
                {children}
            </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#86198f",
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }
});

export default layout
