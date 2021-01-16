import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';


import Waves_Main from '../Components/Waves_Main'
import BgWallet from '../Components/BgWallet'
import BGtotal from '../Components/BGtotal'

import DATA from '../Store/Data_Main_Test'

import Card_Wallet from '../Components/Card_Wallet'

const ListHeaderComp = (props) => {
    const { deben_value, debes_value } = props.props
    return (
        <View style={{ flexDirection: 'column', height: 290 }}>
            <Waves_Main customStyles={styles.svgCurve} />
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 204, marginBottom: 27 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.total}>
                        <Text style={[styles.general_resume_txt, styles.white_txt]}>Resumen General</Text>
                        <Text style={[styles.money_txt, styles.white_txt]}>Te deben</Text>
                        <Text style={[styles.money_val, { color: '#9AE7AB' }]}>${deben_value}</Text>
                        <Text style={[styles.money_txt, styles.white_txt]}>Te debes</Text>
                        <Text style={[styles.money_val, { color: '#EFB7BD' }]}>${debes_value}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.title_wallet}>
                        <BgWallet customStyles={styles.svgWalle} />
                        <Text style={[styles.title_wallet_txt, styles.white_txt]}>Principal{/* MAX 8 car */}</Text>
                    </View>
                    <View style={styles.in_th_walet}>
                        <BGtotal customStyles={styles.svgWalle} />
                        <View style={{ top: -90, marginRight: '5%' }}>
                            <Text style={[styles.money_txt, styles.white_txt, { textAlign: 'right' }]}>En esta cartera</Text>
                            <Text style={[styles.money_val, { color: '#C2E2BE', textAlign: 'right' }]}>$400.000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.info_money_group_buttons}>
                <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#28A745', elevation: 5 }]}>
                    <AntDesign name="pluscircleo" size={15} color="#fff" />
                    <Text style={[styles.white_txt, styles.txt_btn]}>Entró</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#DC3545', elevation: 5 }]}>
                    <AntDesign name="minuscircleo" size={15} color="#fff" />
                    <Text style={[styles.white_txt, styles.txt_btn]}>Salió</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const ListItem = (itemObject) => {
    const { type, value } = itemObject.item
    return (
        <View style={{ paddingHorizontal: 30, }}>
            <Card_Wallet style={styles.list_item} type={type} value={value}></Card_Wallet>
        </View>
    )
}

const Main = (props) => {
    return (
        <View>
            <ListHeaderComp props={props}></ListHeaderComp>
            <FlatList
                data={DATA}
                renderItem={ListItem}
                /*    ListHeaderComponent={ListHeaderComp(props)} */
                keyExtractor={item => item.id}
                style={styles.flatlist}
                ListHeaderComponentStyle={{ marginBottom: 10, height: 290 }}
            />
        </View>
    );
};
const styles = StyleSheet.create(
    {
        svgCurve: {
            position: 'absolute',
            width: '100%'
        },
        svgWalle: {
            width: '100%',
        },
        white_txt: {
            color: '#FDFBFB',
        },
        title_wallet: {
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: 22
        },
        title_wallet_txt: {
            top: -32.5,
            fontSize: 16,
            marginRight: '20%',
            fontWeight: 'bold'
        },
        total: {
            paddingLeft: 55,
            marginTop: 70,
        },
        general_resume_txt: {
            fontSize: 12,
            marginTop: -5,
        },
        money_txt: {
            fontSize: 16,
            marginTop: 7,
        },
        money_val: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        in_th_walet: {
            marginTop: 23,
            paddingLeft: 20,
            display: 'flex',
            marginBottom: 18,
            alignItems: 'flex-end'
        },
        info_money_group_buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        button_strech: {
            width: 95,
            height: 33,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        txt_btn: {
            marginLeft: 7,
        },
        flatlist: {
            backgroundColor: '#EFEDED',
            paddingVertical:20,
            height:'100%'
        },
        list_item: {
            width: '100%',
            marginBottom: 10,
        },
    }
);
export default Main;