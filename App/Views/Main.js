import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Card_Wallet from '../Components/Card_Wallet'

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.info_money}>
                <ImageBackground source={require('../Assets/FONDO-V1.png')}
                    style={[styles.bg_img, styles.bg]}
                    resizeMethod='scale'>
                    <View style={styles.title_wallet}>
                        <Text style={[styles.title_wallet_txt, , styles.white_txt]}>Principal</Text>
                    </View>
                    <View style={styles.total}>
                        <Text style={[styles.general_resume_txt, styles.white_txt]}>Resumen General</Text>
                        <Text style={[styles.money_txt, styles.white_txt]}>Te deben</Text>
                        <Text style={[styles.money_val, styles.white_txt]}>$400.000</Text>
                        <Text style={[styles.money_txt, styles.white_txt]}>Te debes</Text>
                        <Text style={[styles.money_val, , styles.white_txt]}>$100.000</Text>
                    </View>
                    <View style={styles.in_th_walet}>
                        <Text style={[styles.money_txt, styles.white_txt]}>En esta cartera</Text>
                        <Text style={[styles.money_val, styles.white_txt]}>$400.000</Text>
                    </View>
                    <View style={styles.info_money_group_buttons}>
                        <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#28A745' }]}>
                            <Text style={styles.white_txt}>Entró</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#DC3545' }]}>
                            <Text style={styles.white_txt}>Salió</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.list}>

            </View>

        </View>
    );
};
const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            backgroundColor: '#EFEDED',
            flex: 1,
        },
        white_txt: {
            color: '#FDFBFB',
        },

        bg_img: {
            backgroundColor: '#3A97D3',
            paddingTop: 34,
            paddingRight: 36,
            paddingLeft: 36,
            paddingBottom: 15,
            borderRadius: 20,
            resizeMode: 'cover'
        },
        info_money: {
            borderRadius: 20,
            /*  backgroundColor: '#3A97D3', */
        },
        title_wallet: {
            display: 'flex',
            alignItems: 'flex-end'
        },
        title_wallet_txt: {
            fontSize: 14,
        },
        total: {
            paddingLeft: 20
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
            marginTop: -5,
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
            height: 30,
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        list: {
            /*    flex: .5 */
        }
    }
);
export default Main;