import { StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text, View, Heading, Image } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Filtros from '../components/filtros';
import { useNavigation } from '@react-navigation/native';
import { client, getPosts } from '../assets/Api/pocketBase';
import { colors } from './colores';


const HomeScreen = () => {

  // Listado de Tareas post PocketBase
  const navigate = useNavigation();
  const [post, setPost] = useState([])
  const [collectionId, setCollectionId] = useState([])
  const [collectionImages, setCollectionImage] = useState([])
  const [postId, setPostId] = useState([])
  const [postArea, setPostArea] = useState([])
  


  useEffect(() => {
    getPosts().then((res) => {
      setPost(res)

      const collectionId = res.map(item => item.collectionId);
      setCollectionId(collectionId)

      const collectionImage = res.map(item => item.image);
      setCollectionImage(collectionImage)

      const id = res.map(item => item.id);
      setPostId(id)

      const unsubscribe = client.collection('posts').subscribe('*', function (e) {
        console.log('Cambios en el registro:', e.record);

      });

      const areaName = res.map(item => item.area)
      setPostArea(areaName)
    })

  }, []);

  

  
    

  const conferenceScroll = ({ item, index } ) => {

    const imageLink = `https://une-meeting.pockethost.io/api/files/${collectionId[index]}/${postId[index]}/${collectionImages[index]}`
    return (
      <TouchableOpacity key={item.id} style={styles.botonConferenciasActivas}>
          <ImageBackground source={require('../assets/img/conferenceImg.jpg')} resizeMode='cover' style={styles.imagenConferenciasActivas}>

            <Heading pl={2} pb={2} color={colors.lead} size='sm'>{item.user}</Heading>
            <Text pr={2} pb={2} color={colors.lead} fontSize={10}>{item.area}</Text>
          </ImageBackground>
      </TouchableOpacity>
    )
  }





  return (
    <View style={styles.contenedor} position={'relative'}>
      <View flexDirection={'row'} justifyContent={'space-between'} pr={'5%'} mt={5}>
        <View flex={1}>
          <Heading size='lg' fontWeight={'extrabold'}>Hola Alejandro</Heading>
          <Text fontWeight={'normal'}>2 Julio 2023</Text>
        </View>
        <View flexDirection={'row'} alignItems={'center'}>
          <TouchableOpacity onPress={() => navigate.navigate('settings')}>
            <Ionicons name="settings" size={30} color="black" />
          </TouchableOpacity>
          <Image ml={2} source={{
            uri: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          }} alt="Usuario" size={'xs'} borderRadius={100} />
        </View>

      </View>
      <View flexDirection={'row'} mt={5}>
        <Filtros />
      </View>
      <View mt={5}>
        <Heading size={'md'} bold>Recomendaciones</Heading>
        <TouchableOpacity style={styles.botonRecomendaciones}>
          <ImageBackground resizeMode={'cover'} source={require('../assets/img/conferenceImg.jpg')} style={styles.imgRecomendaciones}>
            <Heading pl={2} color={colors.lead} fontWeight={'bold'} size={'sm'}>Sopita Alejandro</Heading>
            <Text pl={2} mb={2} color={colors.lead}>Tics y su impacto en la sociedad</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View flex={1} mt={7}>
        <Heading bold size={'md'}>Conferencias Activas</Heading>
        <FlatList
          data={post}
          horizontal
          renderItem={conferenceScroll}
          showsHorizontalScrollIndicator={false}
        />
        <Heading bold size={'md'} mt={0}>Conferencias Populares</Heading>
        <FlatList
          data={post}
          horizontal
          renderItem={conferenceScroll}
          showsHorizontalScrollIndicator={false}

        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f1f1e6',
    height: '100%',
    paddingLeft: '5%',
    paddingTop: '10%',
    flexGrow: 1

  },

  botonRecomendaciones: {
    width: '95%',
    height: 250,
    marginTop: 8
  },

  imgRecomendaciones: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 15,
    borderWidth: 5,

  },

  botonConferenciasActivas: {
    width: 200,
    height: 130,
    marginTop: 5,
    marginRight: 10

  },

  imagenConferenciasActivas: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
    borderWidth: 4,

  },



})

export default HomeScreen;