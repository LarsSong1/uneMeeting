import { View, Text } from 'react-native'
import React from 'react'
import {Button} from 'native-base'
import { logout } from '../assets/Api/pocketBase'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
  const navigate = useNavigation()
  return (
    <View>
      <Button onPress={()=>{logout,
      navigate.navigate('ForSign')
      }}>salir</Button>
    </View>
  )
}

export default Settings