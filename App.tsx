import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';

interface TimelineProps {
  components: React.JSX.Element[];
  completedMilestones: number[];
}

interface LineProps {
  color: string;
}

function Line(props: LineProps) {
  return <View style={[ styles.line, { backgroundColor: props.color }]}></View>;
}

function Timeline(props: TimelineProps) {
  return (
    <View>
      {props.components.map((component: React.JSX.Element, index: number) => {
        const completed = props.completedMilestones.includes(index);
        const timelineColor = completed ? 'blue' : 'grey';

        return (
          <View style={styles.row}>
            <View style={[ styles.column, styles.timelineColumn ]}>
              <Line color={timelineColor} />
              {/* Container for Timeline "Dot" */}
              <View style={styles.dotContainer}>
                {/* Actual "Dot" on the Timeline */}
                <View style={[ styles.dot, { backgroundColor: timelineColor }]}></View>
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
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  timelineColumn: {
    flex: 2, 
    backgroundColor: 'white',
     alignItems: 'center'
  },
  line: {
    zIndex: 2000, 
    flexGrow: 1, 
    width: 2,
  },
  dotContainer: {
    zIndex: 1000,
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  dot: {
    height: 10, 
    width: 10, 
    borderRadius: 50,
  },
});

export default App;
