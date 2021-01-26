import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

interface TableProps {
  backgroundColor: string;
}
const Table: React.FC<TableProps> = ({ children, backgroundColor }) => {
  return (
    <View style={[TableStyle.wrapper, { backgroundColor: backgroundColor }]}>
      {children}
    </View>
  );
};

const TableStyle = StyleSheet.create({
  wrapper: {
    width: windowWidth,
  },
});

export default Table;
