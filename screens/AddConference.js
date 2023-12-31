import { StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Box, Stack, View, Input, FormControl, Heading, Image, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { colors } from './colores';
import { Picker } from '@react-native-picker/picker';
import * as imagePicker from 'expo-image-picker'
import { client, createPost, getPosts } from '../assets/Api/pocketBase';
import { useNavigation } from '@react-navigation/native';


const AddConference = () => {
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')
  const [link, setLink] = useState('')
  const navigate = useNavigation()


  const uploadForm = async () => {

    if (!tittle){
      return alert('Debes ingresar un titulo')
    }

    if (!description){
      return alert('Debes ingresar una desccripción')
    }

    if (!area){
      return alert('debes ingresar un area')
    }

    if (!link){
      return alert('debes ingresar una url')
    }
    createPost(tittle, description, area, link)
    navigate.goBack()
  };


  

  return (
    <View style={styles.contenedor}>
      <Heading textAlign={'center'}>Añadir conferencias</Heading>
      <Box alignItems="center">
        <Box w="100%" maxWidth="400px">
          {/* title */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Titulo</FormControl.Label>
              <Input type="text" value={tittle} placeholder='Titulo' onChangeText={(titulo) => { setTittle(titulo) }} />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size={10} color="black" />}>
                Solo se admiten 50 cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* description */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Descripción</FormControl.Label>
              <Input type="text" value={description} placeholder='Descripción' onChangeText={(descripcion) => { setDescription(descripcion) }} />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size={10} color="black" />}>
                Solo se admiten * cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* url */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Url</FormControl.Label>
              <Input type="text" value={link} placeholder='Ingresa link de conferencia' onChangeText={(linkvalue) => {setLink(linkvalue)}} />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size={10} color="black" />}>
                Solo se admiten * cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* area */}
          <FormControl isRequired>
            <Stack mx='4'>
              <View backgroundColor={colors.lead} mb={3} mt={3}>
                <Text >Escoge una Categoría</Text>
                <Picker style={styles.picker} onValueChange={(categoria) => { setArea(categoria)}} selectedValue={area}>
                  <Picker.Item label="Economía" value="Economía" />
                  <Picker.Item label="Ofimática" value="Ofimática" />
                  <Picker.Item label="Ciencias Naturales" value="Ciencias Naturales" />
                </Picker>
              </View>
            </Stack>
          </FormControl>
          {/* image */}
          <FormControl isRequired>
            <Stack mx='4'>
              <Image alt='imagenPorSubir' source={require('../assets/img/conferenceImg.jpg')} height={150} />
        
      
            </Stack>
          </FormControl>
          <Stack mx={4}>
            <Button leftIcon={<Icon as={Ionicons} name="cloud-upload" size="sm" />} onPress={uploadForm}>
              Enviar Post
            </Button>
          </Stack>

        </Box>
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
  btnSelectImage: {
    borderRadius: 10,
    backgroundColor: '#ea9a27'

  },
  picker: {
    backgroundColor: '#f1f1e6',
    marginTop: 2
  }
})


export default AddConference;