import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, View, Stack, Input, Icon, Pressable, Heading } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { colors } from './colores';
import { login } from '../assets/Api/pocketBase';
import { useNavigation } from '@react-navigation/native';
 


const LoginPage = () => {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  const [show, setShow] = useState(false);
  const navigate = useNavigation()

   
  


  const handleSubmit = async () => {
    await login(user, password)
    navigate.navigate('MyNavs', {screen: 'Buscar'});
  }


  
  


  return (
    <View style={styles.contenedor}>
      <View justifyContent={'center'} alignItems={'center'}>
        <Image source={require('../assets/img/unemeeting.png')} resizeMode='cover'
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
            InputLeftElement={<Icon as={<Ionicons name="person" size={24} color="black" />} size={5} ml="2" color="muted.400" />} placeholder="Usuario" onChangeText={(e) => { setUser(e) }} />
          <Input borderRadius={15} w={{
            base: "75%",
            md: "25%"
          }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<Ionicons name="eye-off" size={24} color="black" />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Contraseña" onChangeText={(e) => { setPassword(e) }} />

          <TouchableOpacity style={styles.btnIngresar} onPress={handleSubmit}>
            <Text color={colors.lead}>
              Ingresar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCrearCC} onPress={() => { navigate.navigate('Register') }}>
            <Text color={colors.lead}>
              Crea una cuenta
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
  logo: {
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
    width: 150

  },
  btnCrearCC: {
    backgroundColor: '#ea9a27',
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
})



export default LoginPage