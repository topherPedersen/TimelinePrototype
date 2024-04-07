import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

// TODO: Try and add a prototype of a timeline component to the first column below
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
            <View style={{ flexGrow: 1, width: 2, backgroundColor: 'grey' }}></View>
            <View style={{ position: 'absolute', alignSelf: 'stretch', width: '100%', height: '100%', backgroundColor: 'purple', opacity: 0.0 }}></View>
          </View>
          <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, backgroundColor: 'white' }}></View>
          <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, backgroundColor: 'white' }}></View>
          <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, backgroundColor: 'white' }}></View>
          <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
