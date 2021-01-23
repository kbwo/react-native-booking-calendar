import React from 'react';
import { StyleSheet, View } from 'react-native';

interface TableProps {}
const Table: React.FC<TableProps> = ({ children }) => {
  return <View style={TableStyle.wrapper}>{children}</View>;
};

const TableStyle = StyleSheet.create({
  wrapper: {},
});

export default Table;
