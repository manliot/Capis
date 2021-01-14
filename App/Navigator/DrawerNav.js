import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerRoutes from './DrawerRoutes'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Main"
                options={{
                    headerShown: false
                }}
            >
                {(props) => <DrawerRoutes.Main {...props} deben_value={'400.000'} debes_value={'100.000'} />}
            </Drawer.Screen>
            <Drawer.Screen name="AboutUs" component={DrawerRoutes.AboutUs} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
