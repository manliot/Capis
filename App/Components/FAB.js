import React, { useState } from 'react';
import { FAB as F } from 'react-native-paper';

import PrestamosIcon from '../Assets/icons/PrestamosIcon.svg'
import DeudasIcon from '../Assets/icons/DeudasIcon.svg'
import WalletIcon from '../Assets/icons/WalletsIcon.svg'

const Fab = ({ navigation }) => {
    const [open, setOpen] = useState(false)

    return (
        <F.Group
            open={open}
            color='white'
            icon={open ? 'plus' : 'plus'}
            style={{
                paddingBottom: '15%',
            }}
            fabStyle={{
                backgroundColor: "#3a97d3",
                elevation: 10
            }}
            actions={[
                {
                    icon: ({ size, color }) => (
                        <WalletIcon
                            width={size + 2}
                            height={size + 2 / 2}
                            fill={color}
                        />
                    ),
                    label: 'Nueva Cartera',
                    onPress: () => console.log('Pressed email'),
                },
                {
                    icon: ({ size, color }) => (
                        <DeudasIcon
                            width={size + 2}
                            height={size + 2 / 2}
                            fill={color}
                        />
                    ),
                    label: 'Nueva Deuda',
                    onPress: () => navigation.navigate('Detalles'),
                },
                {
                    icon: ({ size, color }) => (
                        <PrestamosIcon
                            width={size + 2}
                            height={size + 2 / 2}
                            fill={color}
                        />
                    ),
                    label: 'Nuevo Prestamo',
                    onPress: () => navigation.navigate('Nuevo'),
                },
            ]}
            onStateChange={() => { setOpen(!open) }}
            onPress={() => {
                console.log('try')
                if (open) {

                    // do something if the speed dial is open
                }
            }}
        />)
}

export default Fab
