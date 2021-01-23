import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface RowProps {}
const Row: React.FC<RowProps> = () => {
  return (
    <View style={RowStyles.rowWrapper}>
      <Text>row component</Text>
    </View>
  );
};

const RowStyles = StyleSheet.create({
  rowWrapper: {},
});

export default Row;
