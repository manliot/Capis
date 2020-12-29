import { Item } from 'native-base'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Item_list = (props) => {
    const { type } = props
    const { name, value, fecha } = props.itemObject.item
    return (
        <View style={styles.container}>
            <View style={styles.contentTop}>
                <Text style={styles.type}>{type ? 'Le prestaste a' : 'Le debes a'}</Text>
                <Text style={styles.value}>${value}</Text>
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 66
    },
    contentTop: {
        flexDirection: 'row'
    },
    type: {
        color: '#6F6C6C',
        fontSize: 14,
    },
    value: {
        flex: 1,
        textAlign: 'right',
        fontSize: 16,
        color: '#383737',
    },
    name: {
        color: '#65D359',
        fontSize: 16,
    },
});
export default Item_list;