import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Container, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Item_List from "../Components/Item_list";

let Fecha
let Type

import DATA from '../Store/Data_test'

const HeaderMain = (props) => {
    return (
        <View style={[styles.bg_color, styles.header]}>
            <View style={styles.header_top}>
                <View style={styles.menu}>
                    <TouchableOpacity style={{ marginRight: 27 }}>
                        <Feather name='menu' size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.search_View}>
                    <View style={styles.search_bar}>

                    </View>
                </View>
            </View>
            <View style={styles.total}>
                <Text style={styles.total_txt}>{props.props.type ? 'Te deben' : 'Debes'} <Text style={styles.total_value}>${props.props.value}</Text></Text>
            </View>
            <View style={styles.filters}>
                <TouchableOpacity style={[styles.button_picker]}>
                    <Text>Por fecha {'>'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.swap_button]}>
                    <Ionicons name="swap-vertical" size={20} color="#6F6C6C" />
                </TouchableOpacity>
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
                <Text style={styles.fecha}>• {fecha} •</Text>
            }
            <View style={styles.itemList} >
                <Item_List type={true} itemObject={itemObject} type={Type} />
            </View>
        </View>
    );
}
const List = (props) => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('');
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
        backgroundColor: '#5FABDB'
    },
    header: {
        position: 'relative',
        width: '100%',
        top: 0,
        height: 143,
        paddingRight: 22,
        paddingLeft: 16,
        paddingTop: 12,
    },
    header_top: {
        flexDirection: 'row',
    },
    menu: {
        flex: 1,
        maxWidth: 52,
        paddingTop: 5
    },
    search_View: {
        flex: 1,
    },
    search_bar: {
        borderRadius: 10,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#959595'
    },
    total: {
        alignItems: 'flex-end',
        marginTop: 18,
    },
    filters: {
        flexDirection: 'row',
        marginTop: 14.54,
        paddingLeft: 20
    },
    total_txt: {
        color: '#FDFBFB',
        fontSize: 16,
    },
    total_value: {
        fontWeight: 'bold',
    },
    button_picker: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginRight: 10,
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
        backgroundColor: '#5FABDB',
        flex: 1
    },
    flatlist: {
        paddingHorizontal: 30,
    },
    fecha: {
        marginTop: 20,
        marginBottom: 15,
        color: 'white',
        textAlign: 'center',
    },
    itemList: {
        marginBottom: 14,
    },
});
export default List;