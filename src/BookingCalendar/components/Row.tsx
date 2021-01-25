import type { DateTime } from 'luxon';
import React, { ReactNode } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface RowProps {
  dateTimeObj: {
    [date: string]: { [time: string]: boolean | string | ReactNode };
  };
  date: DateTime;
  timeString: string;
  onButtonPress: (date: DateTime) => void;
}

const { width: windowWidth } = Dimensions.get('window');

const Row: React.FC<RowProps> = ({
  dateTimeObj,
  date,
  timeString,
  onButtonPress,
}) => {
  const onPress = () => {
    const dateTime = date.plus({
      hours: Number(timeString.substr(0, 2)),
      minutes: Number(timeString.substr(3, 2)),
    });
    onButtonPress(dateTime);
  };
  if (
    dateTimeObj &&
    dateTimeObj[date.toFormat('kkkk-L-dd')] &&
    dateTimeObj[date.toFormat('kkkk-L-dd')][timeString]
  ) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={RowStyles.rowWrapper}>
          {typeof dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ===
            'boolean' && dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ? (
            <Text style={RowStyles.rowMark}>○ </Text>
          ) : typeof dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ===
              'boolean' &&
            dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] === true ? (
            <Text style={RowStyles.rowMark}>× </Text>
          ) : typeof dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ===
            'string' ? (
            <Text style={RowStyles.rowMark}>
              {dateTimeObj[date.toFormat('kkkk-L-dd')][timeString]}
            </Text>
          ) : (
            <>{dateTimeObj[date.toFormat('kkkk-L-dd')][timeString]}</>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={RowStyles.rowWrapper}>
      <Text style={RowStyles.rowMark}>× </Text>
    </View>
  );
};

const RowStyles = StyleSheet.create({
  rowWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    height: 50,
    width: windowWidth * 0.12,
  },
  rowMark: {
    fontSize: 20,
  },
});

export default Row;
