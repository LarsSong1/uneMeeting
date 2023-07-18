import { View, Image, Text } from 'native-base'
import React from 'react'
import { colors } from '../nagevacion'
import logo from '../assets/logo.svg'
import { useEffect } from 'react'




const LoadingPage = ({ navigation }) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigation.navigate('Home')
    //     }, 3000); // Tiempo en milisegundos (en este caso, 3 segundos)

    //     return () => clearTimeout(timer);
    // }, []);

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