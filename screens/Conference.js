import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Text, Button, Box, View, Heading, Flex } from 'native-base'
import InputSearch from '../components/inputSearch'
import { useNavigation } from '@react-navigation/native'
import Filtros from '../components/filtros'
import { colors } from '../nagevacion'
import { Ionicons } from '@expo/vector-icons';




const Conference = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.contenedor}>
      <InputSearch />
      <Text bold fontSize={30} mt={5}> Conferencias </Text>
      <View mt={5}>
        <Filtros />
      </View>
      <View mt={5}>
        <View flexDirection={'row'}>
          <TouchableOpacity style={styles.botonConferencia}>
            <ImageBackground style={styles.imagenConferencia} resizeMode='cover' source={{
              uri: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80'
            }} borderRadius={5}>
              <Heading pb={2} pl={2} color={colors.lead} size={'sm'}>Francis B.</Heading>
              <Text pb={2} pr={2} color={colors.lead}>Estadistica</Text>
            </ImageBackground>

          </TouchableOpacity>
          <View pl={5} width={'95%'} flex={1} justifyContent={'center'} alignItems={'flex-start'} mr={2}>
            <Heading  size={'md'}>Sopa</Heading>
            <Text ellipsizeMode='tail' numberOfLines={4} textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales a sem at accumsan. Nam convallis rhoncus nisi, sit amet sagittis erat. Nam ac turpis varius ante condimentum fermentum. Sed nec risus</Text>
          </View>
        </View>

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
  imagenConferencia: {
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
  
  
  
    

  }
})

export default Conference;