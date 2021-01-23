import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DateProps {}
const Date: React.FC<DateProps> = () => {
  return (
    <View style={DateStyles.dateWrapper}>
      <Text>date component</Text>
    </View>
  );
};

const DateStyles = StyleSheet.create({
  dateWrapper: {},
});

export default Date;
