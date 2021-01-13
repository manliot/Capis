import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path } from "react-native-svg"

const w = Dimensions.get('screen').width
const SvgComponent = ({ customStyles }) => {
    return (
        <View style={customStyles}>
            <View style={{ height: 35, display: 'flex', alignItems: 'flex-end' }}>
                <Svg
                    width={'70%'}
                    height={35}
                    style={[{ position: 'relative', top: 0 }]}

                >
                    <Path
                        d={`M${w} 4h110v31H20A15 15 0 015 20v-1A15 15 0 0120 4z`}
                        fill="#5fabdb"
                    />
                    <Path
                        d={`M${w} 0h115v31H15A15 15 0 010 16v-1A15 15 0 0115 0z`}
                        fill="#00d2aa"
                    />
                </Svg>

            </View>
        </View >
    );
}

export default SvgComponent