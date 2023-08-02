import React from 'react';
import { View, Input, Icon, Stack} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet} from 'react-native'






const InputSearch = ({handle}) => {
    const [show, setShow] = React.useState(false);
    return <Stack space={4} w="100%" alignItems="center" style={styles.search}>
        <Input w={{
            base: "95%",   
        }} InputLeftElement={<Icon as={<Ionicons name='search' size={24} color="black" />} size={5} ml="2" color="muted.800" />} placeholder="¿Que deseas ver?" borderRadius={10}
        onChangeText={handle} />
    </Stack>;
};


const styles = StyleSheet.create({
    search:{
        marginLeft: '-2%'
    }
})
export default InputSearch;
