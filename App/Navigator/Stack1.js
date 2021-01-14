import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Routes from './Stack1Routes'

const Stack = createStackNavigator();

const StackNav1 = () => {
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