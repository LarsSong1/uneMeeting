import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Text, View, Stack, Input, Icon, Pressable, Heading}  from  'native-base'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../nagevacion';

const LoginPage = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.contenedor}>
      <View justifyContent={'center'} alignItems={'center'}>
        <Image source={require('../assets/unemeeting.png')} resizeMode='cover'
          style={styles.logo}
        />
        <Heading size={'md'} mb={5} bold>
          Iniciar Sesión
        </Heading>
        <Stack space={4} w="100%" alignItems="center">
          <Input borderRadius={15} style={styles.forms} w={{
            base: "75%",
            md: "25%"
          }} 
          InputLeftElement={<Icon as={<Ionicons name="person" size={24} color="black" />} size={5} ml="2" color="muted.400" />} placeholder="Correo" />
          <Input borderRadius={15} w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<Ionicons name="eye-off" size={24} color="black" />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Contraseña" />
         <TouchableOpacity style={styles.btnIngresar}>
         <Text color={colors.lead}>
              Ingresar
            </Text>
         </TouchableOpacity>
        </Stack>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f1f1e6',
    height: '100%',
    paddingLeft: '5%',
    paddingBottom: '30%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo:{
    width: 150,
    height: 100,
    resizeMode: 'contain'
    
  },
  forms: {
  
  },
  btnIngresar: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 150
    
  }
})



export default LoginPage