import React, { ReactElement } from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';

interface TimelineProps {
  children: React.ReactNode | React.JSX.Element | React.JSX.Element[] | any; // Need to use type any here or TypeScript will give us an error when we try to call .map on children
  completedMilestones: number[];
}

interface LineProps {
  color: string;
}

interface DotProps {
  color: string;
}

function Line(props: LineProps) {
  return <View style={[ styles.line, { backgroundColor: props.color }]}></View>;
}

function Dot(props: DotProps) {
  return (
    <View style={styles.dotContainer}>
      <View style={[ styles.dot, { backgroundColor: props.color }]}></View>
    </View>
  );
}

function Timeline(props: TimelineProps) {
  const hasMultipleChildren = props?.children !== undefined && props.children.constructor === Array;
  const hasOnlyChild = props?.children !== undefined && props.children.constructor !== Array;

  if (hasMultipleChildren) {
    return (
      <View>
        {props?.children?.map((component: React.JSX.Element, index: number) => {
          const completed = props.completedMilestones.includes(index);
          const timelineColor = completed ? 'purple' : 'grey';
  
          return (
            <View style={styles.row}>
              <View style={[ styles.column, styles.timelineColumn ]}>
                <Line color={timelineColor} />
                <Dot color={timelineColor} />
              </View>
              {component}
            </View>
          )
        })}
      </View>
    );
  } else if (hasOnlyChild) {
    const completed = props.completedMilestones.includes(0);
    const timelineColor = completed ? 'purple' : 'grey';

    return (
      <View>
        <View style={styles.row}>
          <View style={[ styles.column, styles.timelineColumn ]}>
            <Line color={timelineColor} />
            <Dot color={timelineColor} />
          </View>
          {props.children}
        </View>
      </View>
    );
  }

  return null;
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
      <Timeline completedMilestones={completedMilestones}>
        {components}
      </Timeline>
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
