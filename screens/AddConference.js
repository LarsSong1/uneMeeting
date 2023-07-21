import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box, Stack, View, Input, FormControl, Select, CheckIcon, Heading, Center, Image, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../nagevacion';
import * as imagePicker from 'expo-image-picker'


const AddConference = () => {
  // const [service, setService] = useState('');
  const [imageForm, setImageForm] = useState(null)

  // imagePicker
  let selectImage = async () => {
    let permissionImage = await imagePicker.requestCameraPermissionsAsync()


    if (permissionImage.granted == false) {
      alert('Permision denied')
    }


    const pickerResult = await imagePicker.launchImageLibraryAsync()
    console.log(pickerResult)
    

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
              <Input type="text" defaultValue="12345" placeholder='Titulo' />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size='xs' color="black" />}>
                Solo se admiten 50 cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* description */}
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Descripción</FormControl.Label>
              <Input type="text" defaultValue="12345" placeholder='Descripción' />
              <FormControl.HelperText>
                Deben ser al menos 5 caracteres
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size='xs' color="black" />}>
                Solo se admiten * cacteres como máximo
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          {/* area */}
          {/* <FormControl isRequired isInvalid>
            <Stack mx='4'>
              <FormControl.Label>Escoge una Categoria</FormControl.Label>
              <Select  minWidth="200" accessibilityLabel="Choose Service" placeholder="Escoge una Categoria" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} backgroundColor={colors.lead}  />
              }} mt="1">
                <Select.Item  label="Economía"  value="Economía" />
                <Select.Item label="Ofimática" value="Ofimática" />
                <Select.Item label="Ciencias Naturales" value="Ciencias Naturales" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size='xs' color="black" />}>
                Selecciona una opcion por favor
              </FormControl.ErrorMessage>
            </Stack>

          </FormControl> */}

          {/* image */}
          <FormControl isRequired isInvalid>
            <Stack mx='4'>
              <FormControl.Label>Escoge una imagen</FormControl.Label>
              <Image alt='imagenPorSubir' source={{ uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80' }} />
              <FormControl.ErrorMessage leftIcon={<Ionicons name="warning" size='xs' color="black" />}>
                Selecciona una imagen por favor
              </FormControl.ErrorMessage>

              <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} onPress={selectImage}>
                Subir Imagen
              </Button>
            </Stack>

          </FormControl>
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

  }
})


export default AddConference;