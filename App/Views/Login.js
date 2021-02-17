import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import BgLogin from '../Components/BgLogin'
import Brand from '../Assets/LogoLetras.svg'

import { loginWithGoogle } from '../../firebase/Services/GoogleAuth'
import { loginSuccess } from '../Store/features/User'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const singInGoogle = async () => {
        const { user } = await loginWithGoogle()
        await dispatch(loginSuccess({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid
        }))
    }
    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: '#EFEDED' }}>
            <BgLogin customStyles={{ height: '80%', position: 'relative' }} ></BgLogin>
            <View style={{ position: 'absolute', width: '100%', height: '80%', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Brand width={130} height={130 * 1.3625} style={{ marginBottom: 20 }}></Brand>
                    <View style={{ paddingHorizontal: '10%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: '#EFEDED' }}>¡Lleva el control de tu dinero!</Text>
                        <View style={{ paddingHorizontal: '9%', marginTop: 12 }}>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}><Text style={{ color: '#f0913f' }}>✓</Text> Ten una lista de lo que prestas y lo que debes.</Text>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}><Text style={{ color: '#f0913f' }}>✓</Text> Puedes tener diferentes carteras.</Text>
                            <Text style={{ color: '#EFEDED', marginBottom: 5 }}><Text style={{ color: '#f0913f' }}>✓</Text> Controla lo que entra y lo que sale de tus carteras.</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                    style={[{ display: 'flex' }]}
                    onPress={() => singInGoogle()}
                >
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 50, width: 50 }} source={require('../Assets/GoogleBrand.png')} />
                        <Text style={{ color: '#7D6565', textAlignVertical: 'center', marginLeft: 10 }}>Inicia sesion o registrate con Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
