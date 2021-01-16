import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { Container } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


import Item_List from "../Components/Item_list";
import HeaderBg from '../Components/BgHeader'
import Order from '../Assets/icons/order.svg'
import Sort from '../Assets/icons/sort.svg'

import { Format_number_money as fMoney } from '../Libs/Format_number'
import { Formart_date as fDate } from '../Libs/Format_date'

let Fecha
let Type

import DATA from '../Store/Data_test'

const HeaderMain = (props) => {
    return (
        <View style={[styles.bg_color, styles.header]}>
            <HeaderBg customStyles={{ width: '100%' }}></HeaderBg>
            <View style={{ position: 'absolute', width: '100%' }}>
                <View style={styles.header_top}>
                    <View style={styles.menu}>
                        <TouchableOpacity style={{ marginRight: 27 }}>
                            <Feather name='menu' size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search_View}>
                        <View style={styles.search_bar}>
                            <Ionicons name='search' size={25} color="#fff" />
                            <TextInput
                                style={styles.search_bar_input}
                                placeholder='Buscar'
                                placeholderTextColor='#F0F0F0'
                            />
                        </View>
                    </View>
                    <View style={styles.filters}>
                        <TouchableOpacity style={[styles.button_picker, { marginRight: 10 }]}>
                            <Order width={25} height={20} fill={"#6F6C6C"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button_picker]}>
                            <Sort width={20} height={25} fill={"#6F6C6C"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.total}>
                    <Text style={styles.total_txt}>{props.props.type ? 'Te deben' : 'Debes'} <Text style={styles.total_value}>{fMoney(props.props.value)}</Text></Text>
                </View>
            </View>
        </View>
    )
}
const ListItem = (itemObject) => {
    const { fecha } = itemObject.item
    let sw = true
    if (fecha != Fecha) {
        sw = false;
        Fecha = fecha
    }
    return (
        <View>
            {!sw &&
                <Text style={styles.fecha}>• • {fDate(fecha)} • •</Text>
            }
            <View style={styles.itemList} >
                <Item_List itemObject={itemObject} type={Type} />
            </View>
        </View>
    );
}
const List = (props) => {
    Type = props.type;
    return (
        <Container>
            <HeaderMain props={props}></HeaderMain>
            <View style={styles.flatlist_view}>
                <FlatList
                    data={DATA}
                    renderItem={ListItem}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                />
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    bg_color: {
        backgroundColor: '#EFEDED'
    },
    header: {
        height: 123.84,
        display: 'flex',
    },
    header_top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17
    },
    menu: {
        flex: 1,
        maxWidth: 52,
        marginLeft: 15
    },
    search_View: {
        flex: 1,
    },
    search_bar: {
        borderRadius: 10,
        flexDirection: 'row',
        height: 35,
        backgroundColor: '#20638F',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    search_bar_input: {
        color: '#F0F0F0'
    },
    total: {
        alignItems: 'flex-end',
        marginTop: 18,
        marginRight: 25
    },
    filters: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    total_txt: {
        color: '#FDFBFB',
        fontSize: 16,
    },
    total_value: {
        fontWeight: 'bold',
        color: '#C2E2BE',
    },
    button_picker: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 32,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swap_button: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 31.55,
        height: 29.31,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlist_view: {
        backgroundColor: '#EFEDED',
        flex: 1
    },
    flatlist: {
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    fecha: {
        marginTop: 20,
        marginBottom: 15,
        color: '#757171',
        textAlign: 'center',
    },
    itemList: {
        marginBottom: 14,
    },
});
export default List;