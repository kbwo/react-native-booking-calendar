import type { DateTime } from 'luxon';
import React, { ReactNode } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface RowProps {
  dateTimeObj: {
    [date: string]: {
      [time: string]: { row: ReactNode; onPress: (d: DateTime) => void };
    };
  };
  date: DateTime;
  timeString: string;
  borderColor: string;
}

const { width: windowWidth } = Dimensions.get('window');

const Row: React.FC<RowProps> = ({
  dateTimeObj,
  date,
  timeString,
  borderColor,
}) => {
  if (
    dateTimeObj &&
    dateTimeObj[date.toFormat('kkkk-L-dd')] &&
    dateTimeObj[date.toFormat('kkkk-L-dd')][timeString]
  ) {
    const onPress = () => {
      const dateTime = date.plus({
        hours: Number(timeString.substr(0, 2)),
        minutes: Number(timeString.substr(3, 2)),
      });
      dateTimeObj[date.toFormat('kkkk-L-dd')][timeString].onPress(dateTime);
    };
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[RowStyles.rowWrapper, { borderColor: borderColor }]}>
          <>{dateTimeObj[date.toFormat('kkkk-L-dd')][timeString].row}</>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return <View style={[RowStyles.rowWrapper, { borderColor: borderColor }]} />;
};

const RowStyles = StyleSheet.create({
  rowWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 50,
    width: windowWidth * 0.12,
  },
  rowMark: {
    fontSize: 20,
  },
});

export default Row;
