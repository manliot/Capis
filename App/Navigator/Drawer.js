import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerRoutes from './DrawerRoutes'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Stack2"
                options={{
                    headerShown: false
                }}
            >
                {(props) => <DrawerRoutes.Stack2 {...props} />}
            </Drawer.Screen>
            <Drawer.Screen name="AboutUs" component={DrawerRoutes.AboutUs} />
        </Drawer.Navigator>
    )
}

export default DrawerNav
