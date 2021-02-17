import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Ionicons';
import Bg from '../Components/BgLogin'
import Brand from '../Assets/LogoNew.svg'
const h = Dimensions.get('window').height

const Nuevo = ({ route, navigation }) => {
    const { type } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: "#EFEDED" }}>
            <Bg customStyles={{ height: h + 100, width: '100%', position: 'relative' }} ></Bg>
            <View style={{ height: '100%', width: '100%', position: 'absolute' }}>
                <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 60 }}>
                    <Brand width={100} height={100} style={{ marginBottom: 20 }} />
                    <Text style={{ color: '#ffff', fontSize: 20 }}>Nuev{type ? 'o Prestamo' : 'a Deuda'}</Text>
                    <TextInput
                        style={[styles.textInput, { marginTop: 46 }]}
                        placeholder={type ? '¿A quien le prestaste?' : '¿Quien te prestó?'}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder={type ? '¿Cuanto le prestaste?' : '¿Cuanto te prestó?'}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='¿Que dia?'
                    />
                    <TextInput
                        style={[styles.textInput, { height: 100 }]}
                        placeholder='Mensaje'
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#ffff' }}>Listo!</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', marginTop: 17, marginLeft: 15 }}>
                <Feather name='arrow-back' size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#ffff',
        width: '80%',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginTop: 20
    },
    button: {
        marginTop: 40,
        backgroundColor: '#28A745',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 300,
    }
})
export default Nuevo
