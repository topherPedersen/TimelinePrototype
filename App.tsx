import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

interface TimelineProps {
  components: React.JSX.Element[];
}

function Timeline(props: TimelineProps) {
  // return (
  //   <View>
  //     <View style={{ flexDirection: 'row' }}>
  //       <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
  //         {/* Actual "Line" which makes up the Timeline */}
  //         <View style={{ zIndex: 2000, flexGrow: 1, width: 2, backgroundColor: 'grey' }}></View>
  //         {/* Container for Timeline "Dot" */}
  //         <View style={{ zIndex: 1000, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
  //           {/* Actual "Dot" on the Timeline */}
  //           <View style={{ height: 10, width: 10, backgroundColor: 'grey', borderRadius: 50 }}></View>
  //         </View>
  //       </View>
  //       <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>
  //     </View>
  //     <View style={{ flexDirection: 'row' }}>
  //       <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
  //         {/* Actual "Line" which makes up the Timeline */}
  //         <View style={{ zIndex: 2000, flexGrow: 1, width: 2, backgroundColor: 'grey' }}></View>
  //         {/* Container for Timeline "Dot" */}
  //         <View style={{ zIndex: 1000, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
  //           {/* Actual "Dot" on the Timeline */}
  //           <View style={{ height: 10, width: 10, backgroundColor: 'grey', borderRadius: 50 }}></View>
  //         </View>
  //       </View>
  //       <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>
  //     </View>
  //     <View style={{ flexDirection: 'row' }}>
  //       <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
  //         {/* Actual "Line" which makes up the Timeline */}
  //         <View style={{ zIndex: 2000, flexGrow: 1, width: 2, backgroundColor: 'grey' }}></View>
  //         {/* Container for Timeline "Dot" */}
  //         <View style={{ zIndex: 1000, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
  //           {/* Actual "Dot" on the Timeline */}
  //           <View style={{ height: 10, width: 10, backgroundColor: 'grey', borderRadius: 50 }}></View>
  //         </View>
  //       </View>
  //       <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>
  //     </View>
  //     <View style={{ flexDirection: 'row' }}>
  //       <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
  //         {/* Actual "Line" which makes up the Timeline */}
  //         <View style={{ zIndex: 2000, flexGrow: 1, width: 2, backgroundColor: 'grey' }}></View>
  //         {/* Container for Timeline "Dot" */}
  //         <View style={{ zIndex: 1000, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
  //           {/* Actual "Dot" on the Timeline */}
  //           <View style={{ height: 10, width: 10, backgroundColor: 'grey', borderRadius: 50 }}></View>
  //         </View>
  //       </View>
  //       <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>
  //     </View>
  //   </View>
  // );
  return props.components.map((component: React.JSX.Element) => component);
}

function App(): React.JSX.Element {

  const components = [
    <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>,
    <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>,
    <View style={{ flex: 8, backgroundColor: 'blue', height: 100 }}></View>,
    <View style={{ flex: 8, backgroundColor: 'red', height: 200 }}></View>,
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Timeline components={components} />
    </SafeAreaView>
  );
}

export default App;
