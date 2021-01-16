import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BTabRoutes from './BTabRoutes'
import DeudasIcon from '../Assets/icons/DeudasIcon.svg'
import WalletsIcon from '../Assets/icons/WalletsIcon.svg'
import PrestamosIcon from '../Assets/icons/PrestamosIcon.svg'

const Tab = createBottomTabNavigator();

function BTab(props) {
   
    return (
        <Tab.Navigator initialRouteName='Carteras'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    if (route.name === 'Prestamos') {
                        focused
                            ? icon = <PrestamosIcon width={size * 2} height={size} fill={color} />
                            : icon = <PrestamosIcon width={size * 2} height={size} fill={color} />
                    } else if (route.name === 'Carteras') {
                        focused
                            ? icon = <WalletsIcon width={size * 2} height={size} fill={color} />
                            : icon = <WalletsIcon width={size * 2} height={size} fill={color} />
                    } else if (route.name === 'Deudas') {
                        focused
                            ? icon = <DeudasIcon width={size * 2} height={size} fill={color} />
                            : icon = <DeudasIcon width={size * 2} height={size} fill={color} />
                    }
                    // You can return any component that you like here!
                    return (icon);
                },
            })}
            tabBarOptions={{
                activeTintColor: "#3a97d3",
                inactiveTintColor: "#00d2aa",
            }}
        >
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