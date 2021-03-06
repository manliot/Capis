import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card_Wallet = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.index, props.type == true ? styles.plus : styles.minus]}></View>
            <Text style={styles.money_txt}> {props.type == true ? '+' : '-'} ${props.value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 45,
        borderRadius: 15,elevation:2
        
    },
    index: {
        width: 30,
        height: 15,

    },
    plus: {
        backgroundColor: '#28A745',
        borderBottomEndRadius: 50,
        borderTopStartRadius: 50,

    },
    minus: {
        backgroundColor: '#DC3545',
        borderTopEndRadius: 50,
        borderBottomStartRadius: 50

    },
    money_txt: {
        color: '#6F6C6C',
        fontSize: 18,
        fontWeight: 'bold'
    },
});
export default Card_Wallet;