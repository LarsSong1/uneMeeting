import { View , StyleSheet } from 'react-native'
import React from 'react'
import {Text} from 'native-base'


const AddConference = () => {
  return (
    <View style={styles.contenedor}>
      <Text>Añadir conferencias</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f1f1e6',
    height: '100%',
    paddingLeft: '5%',
    paddingTop: '10%'
  }
})


export default AddConference;