import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import auth from '@react-native-firebase/auth'

import { AuthContext, AuthProvider } from '../../firebase/AuthProvider'
//screens
import Routes from './Stack1Routes'

const Stack = createStackNavigator();

const StackNav1 = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    
    const onAuthStateChanged = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                options={{
                    headerShown: false
                }}
            >
                {(props) => <Routes.Login {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name="Main"
                component={Routes.Drawer}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )
}

export default StackNav1;