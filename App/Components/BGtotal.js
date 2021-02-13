import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
import { View } from 'react-native';

function SvgComponent({ customStyles }) {
  return (
    <View style={[customStyles]}>
      <View style={{ height: 113.5, display: 'flex', alignItems: 'flex-end' }}>
        <Svg
          style={[{ position: 'absolute', top: 0 }]}
          width={'90%'}
          height={113.5}
          viewBox="0 0 151.5 113.5"
          preserveAspectRatio="xMinYMin slice"
        >
          <Path
            d="M151.5 7.5v106h-.46c-69.93-10.87-120.67-20.51-128-24a22.23 22.23 0 01-8.75-7.5 20.58 20.58 0 01-2.76-8V47.5a20.58 20.58 0 012.76-8 22.23 22.23 0 018.75-7.5c7.36-3.49 58.1-13.13 128-24"
            fill="#5fabdb"
          />
          <Path
            d="M151.5 0v106h-.5C75.33 95.13 20.42 85.5 12.5 82a23.37 23.37 0 01-9.51-7.5 19.54 19.54 0 01-3-8V40a19.54 19.54 0 013-8 23.37 23.37 0 019.51-7.5c8-3.49 62.87-13.13 138.54-24"
            fill="#00d2aa"
          />
        </Svg>
      </View>
    </View>
  )
}

export default SvgComponent