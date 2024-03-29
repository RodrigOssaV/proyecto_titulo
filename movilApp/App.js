import React from 'react'
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; /* create react nativation stack */

/* imports only src/screens */
import  LoginScreen from "./screens/login";
import  HomeScreen  from "./screens/home";
import DriverScreen from "./screens/driver";
import SupplierScreen from "./screens/supplier";
import LoadScreen from "./screens/load";

/* import only src/forms */
import driverForm from "./forms/driverForm";

const Stack = createNativeStackNavigator(); /* create stack for navigation */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        /* initialRouteName = "LoginScreen"
        component = {LoginScreen} */
      >
        {/* <Stack.Screen 
          name = "LoginScreen"
          component = {LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
        }}
        /> */}
        <Stack.Screen 
          name = "HomeScreen"
          component = {HomeScreen}
          options={{
            title: 'WareSoffan App Móvil',
            headerStyle: {backgroundColor: '#1C658C'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen 
          name = "DriverScreen"
          component = {DriverScreen}
          /* options={{
            title: 'Drivers',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }} */
          options = {({navigation}) => (
            {
              title: 'Repartidores',
              headerStyle: {backgroundColor: '#1C658C'}, 
              headerTitleStyle: {color: '#ffffff'},
              headerTintColor: '#ffffff',
              headerRight: () => (
                <TouchableOpacity onPress = {() => navigation.navigate('DriverFormScreen')}>
                  <Text style={{
                    color: '#ffffff',
                    marginRight: 20,
                    fontSize: 15
                  }}>Agregar</Text>
                </TouchableOpacity>
              )
            }
          )}
        />
        <Stack.Screen
          name = "SupplierScreen"
          component = {SupplierScreen}
          options={{
            title: 'Proveedores',
            headerStyle: {backgroundColor: '#1C658C'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff',
            headerRight: () => (
              <TouchableOpacity /* onPress = {() => navigation.navigate('DriverFormScreen')} */>
                  <Text style={{
                    color: '#ffffff',
                    marginRight: 20,
                    fontSize: 15
                  }}>Agregar</Text>
                </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name = "DriverFormScreen"
          component = {driverForm}
          options = {{
            title: 'Agregar Repartidor',
            headerStyle: {backgroundColor: '#1C658C'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff'
          }}
        />
        <Stack.Screen 
          name = "LoadScreen"
          component = {LoadScreen}
          options = {{
            title: 'Asignar encomienda',
            headerStyle: {backgroundColor: '#1C658C'}, 
            headerTitleStyle: {color: '#ffffff'},
            headerTintColor: '#ffffff',
            headerRight: () => (
              <TouchableOpacity onPress = {() => console.log('loads')}>
                <Text style={{
                  color: '#ffffff',
                  marginRight: 20,
                  fontSize: 15
                }}>Asignar</Text>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
