import { StyleSheet, ImageBackground, TouchableOpacity, Linking, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Text, Heading, Box, Pressable, Stack, Button, Icon } from 'native-base'
import { colors } from './colores'
import { client, deletePost, updatePost } from '../assets/Api/pocketBase'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';




const ConferenceID = () => {
    const route = useRoute()
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigation()


    const deleteId = async () => {
        const idIndex = route.params.id
        console.log(idIndex)
        await deletePost(idIndex)
        navigate.goBack()

    }


    useEffect(() => {
        const getOneResult = async () => {
            try {
                const response = await client.collection('posts').getOne(route.params.id)
                setPost(response);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching post details:', error);
                setLoading(false);

            }
        }



        getOneResult();
    }, [route.params.id]);
    if (loading) {
        return (
            <View flex={1} justifyContent={'center'} alignItems={'center'}>
                <Image source={require('../assets/img/unemeeting.png')} resizeMode='contain' />
                <Text>Cargando</Text>
            </View>
        );
    }

    console.log(post)
    const imageLink = `https://une-meeting.pockethost.io/api/files/${post.collectionId}/${post.id}/${post.image}`

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.contenedor}>
                {post ? (
                    <View>
                        <TouchableOpacity style={styles.btnSeleccionado}>
                            <ImageBackground resizeMode={'cover'} source={require('../assets/img/conferenceImg.jpg')} style={styles.imgSeleccionada}>
                                <Heading pl={2} color={colors.lead} size={'sm'}>{post.user}</Heading>
                                <Text pl={2} mb={2} color={colors.lead}>{post.title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <Heading mt={5}>{post.title}</Heading>
                        <Text mt={2} ml={2}>{post.description}</Text>

                        <Stack mt={5} justifyContent={'flex-end'} mr={5} direction={{
                            base: "row",
                            md: "row",

                        }} space={4}>
                            <Button leftIcon={<Icon as={Ionicons} name="pencil" size="sm" />} backgroundColor={colors.yellow} onPress={
                                () => {
                                    navigate.navigate(`editConference`,
                                        {
                                            id: route.params.id,
                                            title: post.title,
                                            description: post.description,
                                            area: post.area,
                                            url: post.url
                                        });
                                }
                            }>
                                Editar
                            </Button>
                            <Button variant="subtle" endIcon={<Icon as={Ionicons} name="trash" size="sm" color={colors.lead} />} backgroundColor={'#000000'} onPress={deleteId}>
                                <Text color={colors.lead}>Eliminar</Text>
                            </Button>
                        </Stack>

                        <Box alignItems="center" mr={5} mt={5}>
                            <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5" height={150} maxH={150}>
                                <Box>
                                    <Text color="coolGray.800" fontWeight="bold" fontSize="md" textAlign={'center'}>
                                        Entrar al evento
                                    </Text>
                                    <Text mt="2" fontSize="sm" color="coolGray.700" textAlign={'center'}>
                                        Para acceder a la reunión debes darle click al siguiente botón
                                    </Text>

                                    <TouchableOpacity style={styles.btnIr} onPress={() => { Linking.openURL(`${post.url}`) }}>
                                        <Text textAlign='center' color={colors.lead} bold>ir</Text>
                                    </TouchableOpacity>

                                </Box>
                            </Pressable>
                        </Box>


                    </View>
                ) : (
                    <Text>No se encontró el registro.</Text>
                )}

            </View>
        </ScrollView>
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

    },
    ScrollView: {
        flexGrow: 1,
        marginBottom: 10,
    }
})


export default ConferenceID