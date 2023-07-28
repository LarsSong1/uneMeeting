import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Text, Heading, Box, Pressable } from 'native-base'
import { colors } from '../nagevacion'
import { client } from '../assets/Api/pocketBase'




const ConferenceID = ({route}) => {
    const { id } = route.params
    const [post, setPost] = useState(null);


    useEffect(() => {
        const getOneResult = async () => {
            try {
                const response = await client.collection('posts').getOne()
                setPost(response);
            } catch (error) {
                console.error('Error fetching post details:', error);
               
            }
        }



        getOneResult();
    }, [])

    return (
        <View style={styles.contenedor}>
            <TouchableOpacity style={styles.btnSeleccionado}>
                <ImageBackground resizeMode={'cover'} source={{
                    uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                }} style={styles.imgSeleccionada}>
                    <Heading pl={2} color={colors.lead} fontWeight={'bold'} size={'sm'}>Sopita Alejandro</Heading>
                    <Text pl={2} mb={2} color={colors.lead}>Tics y su impacto en la sociedad</Text>
                </ImageBackground>
            </TouchableOpacity>
            <Heading mt={5}>Tics y su impacto en la sociedad</Heading>
            <Text mt={2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sint tempore adipisci consequuntur ullam expedita voluptatem accusantium voluptatum eos quia dignissimos qui assumenda possimus, maiores, quod minus eaque, enim explicabo!</Text>


            <Box alignItems="center" mr={5} mt={5}>
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <Text color="coolGray.800" fontWeight="bold" fontSize="md" textAlign={'center'}>
                            Entrar al evento
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700" textAlign={'center'}>
                            Para acceder a la reunión debes darle click al siguiente botón
                        </Text>



                        <TouchableOpacity style={styles.btnIr}>
                            <Text textAlign='center' color={colors.lead} bold>ir</Text>
                        </TouchableOpacity>

                    </Box>
                </Pressable>
            </Box>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f1f1e6',
        height: '100%',
        paddingLeft: '5%',
        paddingTop: '10%'
    },
    btnSeleccionado: {
        width: '95%',
        height: 250,
        marginTop: 8
    },
    imgSeleccionada: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 15,
        borderWidth: 5,

    },
    btnIr: {
        backgroundColor: '#ea9a27',
        marginTop: 5,
        borderRadius: 10,
        height: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})


export default ConferenceID