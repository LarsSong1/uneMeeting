import { StyleSheet, TouchableHighlightBase } from 'react-native'
import React, { useState } from 'react'
import { Box, Stack, View, Input, FormControl, Heading, Image, Text, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import * as imagePicker from 'expo-image-picker'
import { updatePost } from '../assets/Api/pocketBase';
import { Picker } from '@react-native-picker/picker';
import { decode } from 'base-64';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from './colores';


const EditConference = () => {
  const route = useRoute()
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')
  const idPost = route.params.id
  const idTitle = route.params.title
  const idDescription = route.params.description
  const idArea = route.params.description

  const navigate = useNavigation()


  const handleConferenceForm = async () => {
    await updatePost(idPost, tittle, description, area)
    navigate.goBack()

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
              <Input type="text" value={tittle} placeholder='Titulo' onChangeText={(e) => { setTittle(e) }} />
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
              <Input type="text" value={description} placeholder='Descripción' onChangeText={(e) => { setDescription(e) }} />
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
                <Picker style={styles.picker} onValueChange={(e) => { setArea(e) }} selectedValue={area}>
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