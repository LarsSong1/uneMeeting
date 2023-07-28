import { View, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import Conference from './screens/Conference';
import AddConference from './screens/AddConference';
import { Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider, Image, Text } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './screens/settings';
import ConferenceID from './screens/conferenceID';
import EditConference from './screens/editConference';




const Tab = createBottomTabNavigator();
const addConferenceStack = createNativeStackNavigator();
const settingsAcccount = createNativeStackNavigator();


export const colors = {
    blue: '#002334',
    sky_blue: '#a8c5ddc',
    yellow: '#ea9a27',
    lead: '#f1f1e6',
    white: '#ffffff'
}




function Configuration() {
    return(
        <settingsAcccount.Navigator initialRouteName='Inicio' screenOptions={{headerShown:false}}>
            <settingsAcccount.Screen name='Inicio' component={HomeScreen} />

            <settingsAcccount.Screen name='settings'  options={{headerShown: true}} component={Settings} />
        </settingsAcccount.Navigator>
     )
}

function AddStack() {
    return(
        <addConferenceStack.Navigator initialRouteName='BuscarConferencia' screenOptions={{ headerShown: false }} >
            <addConferenceStack.Screen  name='BuscarConferencia' component={Conference} />

            <addConferenceStack.Screen  name='addConference'  component={AddConference} options={{ headerShown: true }}/>

            <addConferenceStack.Screen name='conferenceID' component={ConferenceID} options={{ headerShown: true,
            headerTitleAlign:'center',
            headerTitle: 'Todas las conferencias',
            headerStyle: styles.headerNav }}/>


            <addConferenceStack.Screen name='editConference' component={EditConference} options={{headerShown: true,
            headerTitle: 'Editar Conferencia'
            }}/>
        </addConferenceStack.Navigator>
    )
}







function MyNavs() {
    return (
        <Tab.Navigator 
            initialRouteName='Buscar'
            screenOptions={{
                tabBarActiveTintColor: colors.sky_blue,
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
                        color: colors.lead,
                    },
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color={colors.lead} />
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
                        color: colors.lead
                    },
                    tabBarIcon: () => (
                        <Ionicons name="search" size={24} color={colors.lead} />
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
                <View style={{flex:1}}>
                    <MyNavs /> 
                    
                </View>

            </NativeBaseProvider>
        </NavigationContainer>

    );
}



const styles = StyleSheet.create({
    headerNav: {
        fontWeight: 'bold',
    }
})