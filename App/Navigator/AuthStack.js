import React from 'react';
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
//screens
import Routes from './Stack1Routes'

const Stack = createStackNavigator();
const StackNav1 = () => {
    const { user } = useSelector(state => state.user)
    return (
        <Stack.Navigator>
            {user ?
                <Stack.Screen
                    name="Main"
                    component={Routes.Drawer}
                    options={{
                        headerShown: false
                    }}
                />
                :
                <Stack.Screen
                    name="Login"
                    options={{
                        headerShown: false
                    }}
                >
                    {(props) => <Routes.Login {...props} />}
                </Stack.Screen>
            }
        </Stack.Navigator>
    )
}

export default StackNav1;