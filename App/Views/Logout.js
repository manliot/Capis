import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { logoutSuccess } from '../Store/features/User'

const Logout = () => {
    const dispatch = useDispatch()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Text>¿Esta seguro que desea cerrar sesion?</Text>
            <TouchableOpacity
                style={[{ display: 'flex' }]}
                onPress={() => dispatch(logoutSuccess())}
            >
                <Text style={{ color: '#7D6565', textAlignVertical: 'center', marginLeft: 10 }}>Si</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Logout
