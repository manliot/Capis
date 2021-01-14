import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Stack2Routes from './Stack2Routes'

const Stack = createStackNavigator();

const StackNav2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tab"
                options={{
                    headerShown: false
                }}
            >
                {(props) => <Stack2Routes.Tab {...props} deben_value={'400.000'} debes_value={'100.000'} />}
            </Stack.Screen>
            <Stack.Screen
                name="Nuevo"
                options={{
                    headerShown: false
                }}
            >
                {(props) => <Stack2Routes.Nuevo {...props} />}
            </Stack.Screen>
        </Stack.Navigator>

    )
}

export default StackNav2;