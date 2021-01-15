import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import BgLogin from '../Components/BgLogin'
const Login = ({ navigation }) => {
    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: '#EFEDED' }}>
            <BgLogin customStyles={{ height: '80%', position: 'relative' }} ></BgLogin>
            <View style={{ position: 'absolute', width: '100%', height: '70%', justifyContent: 'flex-end', }}>
                <View style={{ alignItems: 'center', marginBottom: 0 }}>
                    <Image style={{ height: 130, width: 130, marginBottom: 40 }} source={require('../Assets/Logo.png')}></Image>
                    <View style={{ paddingHorizontal: '10%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: '#EFEDED' }}>Lleva el control de tu dinero!</Text>
                        <View style={{ paddingHorizontal: '9%', marginTop: 12 }}>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}>✓ Ten una lista de lo que prestas y lo que debes.</Text>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}>✓ Puedes tener diferentes carteras.</Text>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}>✓ Controla lo que entra y lo que sale de tus carteras.</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                    style={[{ display: 'flex' }]}
                    onPress={() => navigation.navigate('Main')}
                >
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 50, width: 50 }} source={require('../Assets/GoogleBrand.png')} />
                        <Text style={{ color: '#7D6565', textAlignVertical: 'center', marginLeft: 10 }}>Iniciar sesion o registrate con google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
