import { StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Text, Button, Box, View, Heading, Flex } from 'native-base'
import InputSearch from '../components/inputSearch'
import { useNavigation } from '@react-navigation/native'
import Filtros from '../components/filtros'
import { colors } from './colores'
import { Ionicons } from '@expo/vector-icons';
import { getPosts, client } from '../assets/Api/pocketBase'
import ConferenceButton from '../components/conferenceButtton'




const Conference = () => {
  const navigate = useNavigation();
  const [post, setPost] = useState([])
  const [collectionId, setCollectionId] = useState([])
  const [collectionImages, setCollectionImage] = useState([])
  const [postId, setPostId] = useState([])
  const [postArea, setPostArea] = useState([])
  const [filterPost, setFilterPost] = useState([])
  const [searchText, setSearchText] = useState('')

  const [filterArea, setFilterArea] = useState([])
  const [searchArea, setSearchArea] = useState([])
  const [username, setUsername] = useState('');



  useEffect(() => {
    getPosts().then((res) => {
      setPost(res)
      const collectionId = res.map(item => item.collectionId);
      setCollectionId(collectionId)
      const collectionImage = res.map(item => item.image);
      setCollectionImage(collectionImage)
      const id = res.map(item => item.id);
      setPostId(id)
      const areaName = res.map(item => item.area)
      setPostArea(areaName)

      setFilterArea(res)
      setFilterPost(res)
    })
  }, []);


  const returnSearch = (text) => {
    setSearchText(text)
    const filter = post.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase())
    });

    setFilterPost(filter)
  }





  const returnSearchArea = (text) => {
    setSearchArea(text)
    const filter = post.filter((item) => {
      return item.area.toLowerCase().includes(text.toLowerCase())

    });
    setFilterArea(filter)
  }


  const EliminarFiltros = () => {
    setFilterArea([]);
  };







  const conferenceScroll = ({ item, index }) => {
    // try {
      const idPost = postId[index]
      const userId = item.user; // Aquí está el RELATION_RECORD_ID del usuario que creó el post

    //   const record = await client.collection('users').getOne(userId, {
    //     expand: 'relField1,relField2.subRelField', // Ajusta si es necesario
    //   });
    //   console.log(record,  ' -------------- ', record.name)

    // } catch (error) {
    //   console.error('Error al obtener el nombre de usuario:', error);


    // };


  


    return (
      <View flexDirection={'row'} mb={3}>
        <ConferenceButton item={item} index={index} idPost={idPost} />
        <View pl={5} width={'95%'} flex={1} justifyContent={'flex-start'} alignItems={'flex-start'} mr={2}>
          <Heading size={'md'}>{item.title}</Heading>
          <Text ellipsizeMode='tail' numberOfLines={4} textAlign={'justify'}>{item.description}</Text>
        </View>
      </View>
    )
  }



  return (
    <View style={styles.contenedor}>
      <InputSearch handle={returnSearch} />
      <View flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Text bold fontSize={30} mt={5}>Conferencias</Text>
        <Button onPress={EliminarFiltros} backgroundColor={colors.yellow}
          mt={6} mr={5}
        >Eliminar filtros</Button>
      </View>

      <View mt={5}>
        <Filtros filter={returnSearchArea} filterArea={filterArea} />
      </View>
      <View mt={5} flex={1}>
        <FlatList
          data={filterArea.length > 0 ? filterArea : filterPost}
          renderItem={conferenceScroll}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

      </View>

      <Box alignItems="center" position={'absolute'} bottom={5} right={5}>
        <Button onPress={() => navigate.navigate('addConference')} style={{ backgroundColor: colors.yellow }} borderRadius={150} height={70} width={70}>
          <Ionicons name="add-outline" size={40} color={colors.lead} />
        </Button>
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
    marginRight: 10

  },

  listaConferencias: {
    marginBottom: 10,
    height: 150
  }
})

export default Conference;