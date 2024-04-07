import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, backgroundColor: 'red' }}></View>
          <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
