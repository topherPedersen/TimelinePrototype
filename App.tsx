import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';

interface TimelineProps {
  components: React.JSX.Element[];
  completedMilestones: number[];
}

function Timeline(props: TimelineProps) {
  return (
    <View>
      {props.components.map((component: React.JSX.Element, index: number) => {
        const completed = props.completedMilestones.includes(index);
        const timelineColor = completed ? 'blue' : 'grey';

        return (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', flex: 2, backgroundColor: 'white', alignItems: 'center' }}>
              {/* Actual "Line" which makes up the Timeline */}
              <View style={{ zIndex: 2000, flexGrow: 1, width: 2, backgroundColor: timelineColor }}></View>
              {/* Container for Timeline "Dot" */}
              <View style={{ zIndex: 1000, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                {/* Actual "Dot" on the Timeline */}
                <View style={{ height: 10, width: 10, backgroundColor: timelineColor, borderRadius: 50 }}></View>
              </View>
            </View>
            {component}
          </View>
        )
      })}
    </View>
  );
}

function App(): React.JSX.Element {
  const components = [
    <View style={styles.aComponent}></View>,
    <View style={styles.bComponent}></View>,
    <View style={styles.cComponent}></View>,
    <View style={styles.dComponent}></View>,
  ];

  const completedMilestones = [0, 1, 2];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Timeline 
        components={components} 
        completedMilestones={completedMilestones}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  aComponent: {
    flex: 8, 
    backgroundColor: 'red', 
    height: 150,
  },
  bComponent: {
    flex: 8, 
    backgroundColor: 'orange', 
    height: 175,
  },
  cComponent: {
    flex: 8, 
    backgroundColor: 'yellow', 
    height: 100, 
  },
  dComponent: {
    flex: 8, 
    backgroundColor: 'green', 
    height: 200, 
  },
});

export default App;
