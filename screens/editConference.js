import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, Stack, View, Input, FormControl, Heading, Image, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import { createPost, updatePost } from '../assets/Api/pocketBase';
import { Picker } from '@react-native-picker/picker';
import { decode } from 'base-64';
import { useNavigation } from '@react-navigation/native';
import { colors } from './colores';


const EditConference = () => {
  const { id } = route.params
  const [imageForm, setImageForm] = useState('')
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')

  const handleTittle = (text) => {
    setTittle(text)

  }

  const handleDescription = (e) => {
    setDescription(e)

  }


  const handleCategoryChange = (value) => {
    setArea(value);

  };




  const handleConferenceForm = () => {
    if (!tittle) {
      // window.alert('ingresa un titulo')
      return;
    }


    const base64Image = `${imageForm.localUri}`

    // console.log(imageForm.localUri)
    const binaryString = decode(base64Image.split(',')[1]);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/jpeg" });

    updatePost(id, tittle, description, area, blob)

    // window.alert('se envio con exito')
    // window.location.reload()
    navigate.navigate('BuscarConferencia')
  }



  // imagePicker
  let selectImage = async () => {
    let permissionImage = await imagePicker.requestCameraPermissionsAsync()

    if (permissionImage.granted === false) {
      alert('Permision denied');
      return
    }

    const pickerResult = await imagePicker.launchImageLibraryAsync()
    if (pickerResult.granted == false) {
      return;
    }



    if (pickerResult.canceled === true) {
      return;
    }



    // setImageForm({ localUri: pickerResult.uri })
    const selectedAsset = pickerResult.assets[0];
    const imageUri = selectedAsset.uri;


    setImageForm({ localUri: imageUri });


  }

  selectImage()

  console.log(imageForm.localUri)


  const defaultImg = 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'


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
          <FormControl isRequired>
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
          <FormControl isRequired>
            <Stack mx='4'>

              <Image alt='imagenPorSubir' source={{ uri: imageForm !== '' ? imageForm.localUri : defaultImg }} height={150} />
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

export default EditConference