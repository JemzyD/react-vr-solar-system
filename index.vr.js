import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  asset,
  DirectionalLight,
  Pano,
  Scene,
  Text,
  View
} from 'react-vr';

import SolarSystemObject from './Components/SolarSystemObject';

export default class solar_system_vr extends React.Component {
  render() {
    return (
      <View>
        <Scene
          style={{
            transform: [{ translate: [0, 0, 100] }]
          }}
        />
        <Pano source={asset('spacescape.png')} />
        <AmbientLight intensity={0.15} />
        <DirectionalLight
          intensity={1}
          style={{
            transform: [{ translateY: -40 }]
          }}
        />

        <SolarSystemObject
          object="Sun"
          styles={{
            transform: [{ translate: [0, -50, 0] }, { scale: 1 }]
          }}
          delta={150}
        />
        <SolarSystemObject
          object="Mercury"
          styles={{
            transform: [{ translate: [0, -50, -50] }, { scale: 0.1 }]
          }}
          orbit={true}
          delta={40}
        />
        <SolarSystemObject
          object="Venus"
          styles={{
            transform: [{ translate: [0, -50, -65] }, { scale: 0.1 }]
          }}
          orbit={true}
          delta={80}
        />
        <SolarSystemObject
          object="Earth"
          styles={{
            transform: [{ translate: [0, -50, -90] }, { scale: 0.1 }]
          }}
          orbit={true}
          delta={100}
        />
        <SolarSystemObject
          object="Mars"
          styles={{
            transform: [{ translate: [0, -50, -120] }, { scale: 0.11 }]
          }}
          orbit={true}
          delta={130}
        />
        <SolarSystemObject
          object="Jupiter"
          styles={{
            transform: [{ translate: [0, -50, -150] }, { scale: 0.7 }]
          }}
          orbit={true}
          delta={200}
        />
        <SolarSystemObject
          object="Saturn"
          styles={{
            transform: [{ translate: [0, -50, -180] }, { scale: 0.4 }]
          }}
          orbit={true}
          delta={100}
        />
        <SolarSystemObject
          object="Uranus"
          styles={{
            transform: [{ translate: [0, -50, -220] }, { scale: 0.3 }]
          }}
          orbit={true}
          delta={240}
        />
        <SolarSystemObject
          object="Neptune"
          styles={{
            transform: [{ translate: [0, -50, -280] }, { scale: 0.2 }]
          }}
          orbit={true}
          delta={300}
        />
        <SolarSystemObject
          object="Pluto"
          styles={{
            transform: [{ translate: [0, -50, -340] }, { scale: 0.1 }]
          }}
          orbit={true}
          delta={400}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('solar_system_vr', () => solar_system_vr);
