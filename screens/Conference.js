import { StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState, useEffect }from 'react'
import { Text, Button, Box, View, Heading, Flex } from 'native-base'
import InputSearch from '../components/inputSearch'
import { useNavigation } from '@react-navigation/native'
import Filtros from '../components/filtros'
import { colors } from './colores'
import { Ionicons } from '@expo/vector-icons';
import { getPosts } from '../assets/Api/pocketBase'




const Conference = () => {
  const navigate = useNavigation();
  const [post, setPost] = useState([])
  const [collectionId, setCollectionId] = useState([])
  const [collectionImages, setCollectionImage] = useState([])
  const [postId, setPostId] = useState([])
  const [postArea, setPostArea] = useState([])
  const [filterPost, setFilterPost] = useState([])  
  const [searchText, setSearchText] = useState('')
  
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
    })
  }, []);


  const returnSearch = (text) =>{
    setSearchText(text)
    const filter = post.filter((item)=>{
      return item.title.toLowerCase().includes(text.toLowerCase())
    });

    setFilterPost(filter)
  }


  console.log(post)
  const conferenceScroll = ({ item, index } ) => {
    const idPost = postId[index]

    return (
      <View flexDirection={'row'} mb={3}>
          <TouchableOpacity style={styles.botonConferencia} onPress={()=> navigate.navigate('conferenceID', {id: idPost})}>
            <ImageBackground style={styles.imagenConferencias} resizeMode='cover' source={require('../assets/img/conferenceImg.jpg')} borderRadius={5}>
              <Heading pb={2} pl={2} color={colors.lead} size={'sm'}>{item.user}</Heading>
              <Text pb={2} pr={2} color={colors.lead}>{item.area}</Text>
            </ImageBackground>

          </TouchableOpacity>
          <View pl={5} width={'95%'} flex={1} justifyContent={'flex-start'} alignItems={'flex-start'} mr={2}>
            <Heading  size={'md'}>{item.title}</Heading>
            <Text ellipsizeMode='tail' numberOfLines={4} textAlign={'justify'}>{item.description}</Text>
          </View>
        </View>
    )
  }

 

  return (
    <View style={styles.contenedor}>
      <InputSearch handle={returnSearch} />
      <Text bold fontSize={30} mt={5}> Conferencias </Text>
      <View mt={5}>
        <Filtros />
      </View>
      <View mt={5} flex={1}>
        <FlatList
          data={filterPost}
          renderItem={conferenceScroll}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

      </View>

      <Box alignItems="center" position={'absolute'} bottom={5} right={5}>
        <Button onPress={() => navigate.navigate('addConference')} style={{backgroundColor: colors.yellow}} borderRadius={150} height={70} width={70}>
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
  
  },

  listaConferencias: {
    marginBottom: 10,
    height: 150
  }
})

export default Conference;