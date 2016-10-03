import React from 'react';
import {View, ActivityIndicator} from 'react-native';
//size shown below is an arbitrary random prop
const Spinner = ({ size }) =>{
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

}


export { Spinner };