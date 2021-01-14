import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BTabRoutes from './BTabRoutes'


const Tab = createBottomTabNavigator();

function BTab() {
    return (
        <Tab.Navigator initialRouteName='Carteras'>
            <Tab.Screen
                name="Prestamos"
            >
                {(props) => <BTabRoutes.Listas {...props} type={true} value='100400000' />}
            </Tab.Screen>
            <Tab.Screen name="Carteras">
                {(props) => <BTabRoutes.Wallets {...props} deben_value={'400.000'} debes_value={'100.000'} />}
            </Tab.Screen>
            <Tab.Screen
                name="Deudas"
            >
                {(props) => <BTabRoutes.Listas {...props} type={false} value='1004000' />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default BTab;