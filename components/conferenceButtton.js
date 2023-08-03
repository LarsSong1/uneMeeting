import { ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Text, Button, Box, View, Heading } from 'native-base'
import { colors } from '../screens/colores'
import { useNavigation } from '@react-navigation/native'

const ConferenceButton = ({ item, index, idPost }) => {

    const navigate = useNavigation()
    return (
        <TouchableOpacity style={styles.botonConferencia} onPress={() => navigate.navigate('conferenceID', { id: idPost })}>
            <ImageBackground style={styles.imagenConferencias} resizeMode='cover' source={require('../assets/img/conferenceImg.jpg')} borderRadius={5}>
                <View flexShrink={1}>
                    <Heading pb={2} pl={2} color={colors.lead} size={'sm'} ellipsizeMode='tail' numberOfLines={1}>{item.user}</Heading>
                </View>
                <Text pb={2} pr={2} color={colors.lead} fontSize={10}>{item.area}</Text>
            </ImageBackground>

        </TouchableOpacity>
    )
}

export default ConferenceButton


const styles = StyleSheet.create({
    imagenConferencias: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderRadius: 10,
        borderWidth: 3,

    },
    botonConferencia: {
        width: 190,
        height: 130,
        

    },

    listaConferencias: {
        marginBottom: 10,
        height: 150,
    }
})