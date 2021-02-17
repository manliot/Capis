import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Image } from 'react-native'

const Aboutus = ({ navigation }) => {
    const user = useSelector(state => state.user.user)
    return (
        <View>
            <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: user.photoURL }} />
            <Text>Hola {user.displayName}</Text>
        </View>
    )
}

export default Aboutus
