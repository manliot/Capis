import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerRoutes from './DrawerRoutes'

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
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
            <Drawer.Screen name="Salir" component={DrawerRoutes.Logout}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav
