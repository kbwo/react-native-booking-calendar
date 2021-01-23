import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TimeProps {}
const Time: React.FC<TimeProps> = () => {
  return (
    <View style={TimeStyles.timeWrapper}>
      <Text>time component</Text>
    </View>
  );
};

const TimeStyles = StyleSheet.create({
  timeWrapper: {},
});

export default Time;
