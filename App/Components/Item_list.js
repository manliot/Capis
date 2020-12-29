import { Item } from 'native-base'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Item_list = (props) => {
    const { name, value, fecha } = props.itemObject.item
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 66
    },
});
export default Item_list;