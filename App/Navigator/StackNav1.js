import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Routes from './StackRoutes'

const Stack = createStackNavigator();

const StackNav1 = () => {
    return (
        <NavigationContainer>
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
                    options={{
                        headerShown: false
                    }}
                >
                    {(props) => <Routes.Main {...props} deben_value={'400.000'} debes_value={'100.000'} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav1;