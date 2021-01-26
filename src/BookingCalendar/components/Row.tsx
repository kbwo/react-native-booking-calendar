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
  fontColor: string;
  trueSignColor: string;
  falseSignColor: string;
  borderColor: string;
}

const { width: windowWidth } = Dimensions.get('window');

const Row: React.FC<RowProps> = ({
  dateTimeObj,
  date,
  timeString,
  onButtonPress,
  fontColor,
  borderColor,
  trueSignColor,
  falseSignColor,
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
    dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] &&
    dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] !== false
  ) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[RowStyles.rowWrapper, { borderColor: borderColor }]}>
          {typeof dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ===
            'boolean' && dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ? (
            <Text style={[RowStyles.rowMark, { color: trueSignColor }]}>
              〇
            </Text>
          ) : typeof dateTimeObj[date.toFormat('kkkk-L-dd')][timeString] ===
            'string' ? (
            <Text style={[RowStyles.rowMark, { color: fontColor }]}>
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
    <View style={[RowStyles.rowWrapper, { borderColor: borderColor }]}>
      <Text style={[RowStyles.rowMark, { color: falseSignColor }]}>× </Text>
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
    height: 50,
    width: windowWidth * 0.12,
  },
  rowMark: {
    fontSize: 20,
  },
});

export default Row;
