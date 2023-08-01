import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import Conference from './screens/Conference';
import AddConference from './screens/AddConference';
import { Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider, Image, Text, Stack } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './screens/settings';
import ConferenceID from './screens/conferenceID';
import EditConference from './screens/editConference';
import colors from './screens/colores'
import { isUser } from './assets/Api/pocketBase';
import LoginPage from './screens/Login'
import RegisterPage from './screens/Register'




const Tab = createBottomTabNavigator();
const addConferenceStack = createNativeStackNavigator();
const settingsAccount = createNativeStackNavigator();
const Rl = createNativeStackNavigator();
const stack = createNativeStackNavigator();



function ForSign() {
    return (
        <Rl.Navigator initialRouteName='Login' screenOptions={{
            headerShown: false
        }}>
            <Rl.Screen name='Login' component={LoginPage} />

            <Rl.Screen name='Register' component={RegisterPage} />
        </Rl.Navigator>
    )
}


function Configuration() {
    return (
        <settingsAccount.Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
            <settingsAccount.Screen name='Inicio' component={HomeScreen} />

            <settingsAccount.Screen name='settings' options={{ headerShown: true }} component={Settings} />
        </settingsAccount.Navigator>
    )
}

function AddStack() {
    return (
        <addConferenceStack.Navigator initialRouteName='BuscarConferencia' screenOptions={{ headerShown: false }} >
            <addConferenceStack.Screen name='BuscarConferencia' component={Conference} />

            <addConferenceStack.Screen name='addConference' component={AddConference} options={{ headerShown: true }} />

            <addConferenceStack.Screen name='conferenceID' component={ConferenceID} options={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitle: 'Todas las conferencias',
                headerStyle: styles.headerNav
            }} />


            <addConferenceStack.Screen name='editConference' component={EditConference} options={{
                headerShown: true,
                headerTitle: 'Editar Conferencia'
            }} />
        </addConferenceStack.Navigator>
    )
}







function MyNavs() {
   
        return (
            <Tab.Navigator
                initialRouteName='Inicio'
                screenOptions={{
                    tabBarActiveTintColor: '#a8c5ddc',
                    tabBarStyle: {
                        backgroundColor: '#002334',
                        height: 72,
                        paddingLeft: 55,
                        paddingRight: 55,
                    },
                    headerShown: false,

                }}
            >

                <Tab.Screen name='Home' component={Configuration}
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarLabelStyle: {
                            paddingBottom: 10,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1e6',
                        },
                        tabBarIcon: () => (
                            <Ionicons name="home" size={24} color={'#f1f1e6'} />
                        ),
                        backgroundColor: '#002334'
                    }}
                />

                <Tab.Screen name='Buscar' component={AddStack}
                    options={{
                        tabBarLabel: 'Buscar',
                        tabBarLabelStyle: {
                            paddingBottom: 10,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#f1f1e6'
                        },
                        tabBarIcon: () => (
                            <Ionicons name="search" size={24} color={'#f1f1e6'} />
                        ),

                    }}
                />



            </Tab.Navigator>
        ) 
}



export default function Navegacion() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>

                {/* <View style={{ flex: 1 }}>
                    <MyNavs />
                </View> */}
                <stack.Navigator initialRouteName="ForSign" screenOptions={{ headerShown: false }}>
                    <Rl.Screen name="ForSign" component={ForSign} />
                    <Rl.Screen name="MyNavs" component={MyNavs} />
                </stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>

    );
}



const styles = StyleSheet.create({
    headerNav: {
        fontWeight: 'bold',
    }
})