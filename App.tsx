import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, backgroundColor: 'white' }}></View>
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
