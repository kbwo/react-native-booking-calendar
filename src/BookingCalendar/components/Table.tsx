import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

interface TableProps {}
const Table: React.FC<TableProps> = ({ children }) => {
  return <View style={TableStyle.wrapper}>{children}</View>;
};

const TableStyle = StyleSheet.create({
  wrapper: {
    width: windowWidth,
  },
});

export default Table;
