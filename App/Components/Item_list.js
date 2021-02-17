
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Format_number_money as fMoney } from '../Libs/Format_number'

const Item_list = (props) => {
    const { type } = props
    const { name, value, fecha } = props.itemObject.item
    return (
        <View style={styles.container}>
            <View style={styles.contentTop}>
                <Text style={styles.type}>{type ? 'Le prestaste a' : 'Le debes a'}</Text>
                <Text style={styles.value}>{fMoney(value)}</Text>
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
        borderRadius: 15,
        height: 60,
        elevation: 3,
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