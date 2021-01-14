import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Routes from './StackRoutes'

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
                name="In"
                component={Routes.DrawerNav}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    )
}

export default StackNav1;