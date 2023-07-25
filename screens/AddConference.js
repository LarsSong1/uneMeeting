import { StyleSheet, TouchableOpacity, Picker } from 'react-native'
import React, { useState } from 'react'
import { Box, Stack, View, Input, FormControl, Select, CheckIcon, Heading, Center, Image, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../nagevacion';
import * as imagePicker from 'expo-image-picker'
import { createPost } from '../assets/Api/pocketBase';



const AddConference = () => {
  // const [service, setService] = useState('');
  const [imageForm, setImageForm] = useState(null)
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')


  const handleTittle = (e) =>{
    setTittle(e)
    console.log( setTittle(e))
  }

  const handleDescription = (e) => {
    setDescription(e)
  }


  const handleCategoryChange = (value) => {
    setArea(value);
  };



  const handleConferenceForm = () => {
    if(!tittle){
      window.alert('ingresa un titulo')
      return;
    }
    createPost(tittle, description, area, imageForm)
    window.alert('se envio con exito')
  }

  // imagePicker
  let selectImage = async () => {
    let permissionImage = await imagePicker.requestCameraPermissionsAsync()


    if (permissionImage.granted == false) {
      alert('Permision denied')
    }


    const pickerResult = await imagePicker.launchImageLibraryAsync()
    if (pickerResult.canceled == true) {
      return;
    }

    setImageForm({ localUri: pickerResult.uri })
  }







  return (
    <View style={styles.contenedor}>
      <Heading textAlign={'center'}>Añadir conferencias</Heading>
      <Box alignItems="center">
        <Box w="100%" maxWidth="400px">
          {/* title */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Titulo</FormControl.Label>
              <Input type="text" value={tittle} placeholder='Titulo' onChangeText={handleTittle} />
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
              <Input type="text" value={description} placeholder='Descripción' onChangeText={handleDescription} />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size={10} color="black" />}>
                Solo se admiten * cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* area */}
          <FormControl isRequired isInvalid>
            <Stack mx='4'>
              <View backgroundColor={colors.lead} mb={3} mt={3}>
                <Text >Escoge una Categoría</Text>
                <Picker style={styles.picker} onValueChange={handleCategoryChange} selectedValue={area}>
                  <Picker.Item label="Economía" value="Economía" />
                  <Picker.Item label="Ofimática" value="Ofimática" />
                  <Picker.Item label="Ciencias Naturales" value="Ciencias Naturales" />
                </Picker>
          
              </View>
            </Stack>
          </FormControl>

          {/* image */}
          <FormControl isRequired isInvalid>
            <Stack mx='4'>

              <Image alt='imagenPorSubir' source={{ uri: imageForm !== null ? imageForm.localUri : 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }} height={150} />
              <Button mt={3} onPress={selectImage}>
                Escoge una imagen
              </Button>


              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size={10} color="black" />}>
                Selecciona una imagen por favor
              </FormControl.ErrorMessage>

              
            </Stack>

          </FormControl>
          <Button leftIcon={<Icon as={Ionicons} name="cloud-upload" size="sm" />} onPress={handleConferenceForm}>
                Enviar Post
          </Button>
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