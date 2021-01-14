import React from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View>
            <TextInput></TextInput>
            <TouchableHighlight
                style={[{ backgroundColor: '#28A745', height: '50%', width: '50%' }]}
                onPress={() => navigation.navigate('In')}
            >
                <View>
                    <Text>Login</Text>

                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Login
