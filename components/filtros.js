import { FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons';



const CATEGORIAS = [
    { nombre: 'Economía', icono: "book" },
    { nombre: 'Ofimática', icono: 'desktop' },
    { nombre: 'Ciencia de Datos', icono: 'flask' },
    { nombre: 'Gestion de Proyectos', icono: "book" }
]

const Filtros = () => {
    const categoryIcons = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.boton}>
                <Icon as={Ionicons} name={item.icono} size={4} color={'#f1f1e6'} mr={2} />
                <Text bold color={'#f1f1e6'} fontSize={'lg'}>{item.nombre}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            data={CATEGORIAS}
            horizontal
            renderItem={categoryIcons}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        padding: 15,
        borderRadius: 15,
    
      },
})


export default Filtros