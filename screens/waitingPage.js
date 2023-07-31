import { View, Image, Text } from 'native-base'
import React from 'react'
import logo from '../assets/logo.svg'
import { useEffect } from 'react'
import { colors } from './colores'




const LoadingPage = ({ navigation }) => {

    return (
        <View color={colors.lead}>
            <Image size={'xl'} source={{
                uri: logo
            }} />
            <Text>Hola</Text>
        </View>
    );
};


export default LoadingPage