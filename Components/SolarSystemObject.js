import React, { Component } from 'react';
import { Animated, asset, View, Model } from 'react-vr';

import { append, insert } from 'ramda';

class SolarSystemObject extends React.Component {
  state = {
    rotation: 0
  };

  lastUpdate = Date.now();

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate = () => {
    const now = Date.now();
    const delta = now - this.lastUpdate;

    this.time++;

    this.lastUpdate = now;
    this.setState({
      rotation: this.state.rotation + delta / this.props.delta
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  };

  render() {
    const { object, orbit, styles } = this.props;
    const { rotation } = this.state;
    let addRotation = append(
      { rotateY: this.state.rotation },
      styles.transform
    );
    if (orbit) {
      addRotation = insert(0, { rotateY: rotation }, addRotation);
    }
    return (
      <View>
        <Model
          source={{
            obj: asset(`models/${object}.obj`)
          }}
          texture={asset(`textures/${object}_512.png`)}
          lit={true}
          style={[{ transform: addRotation }]}
        />
      </View>
    );
  }
}

export default SolarSystemObject;
