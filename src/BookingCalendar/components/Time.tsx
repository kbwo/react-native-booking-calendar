import { DateTime } from 'luxon';
import React, { ReactNode, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Row from './Row';

interface TimeProps {
  defaultRow?: {
    row: ReactNode;
    onPress: (d: DateTime) => void;
  };
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  intervalMinutes: number;
  dateTime: {
    [date: string]: {
      [time: string]: { row: ReactNode; onPress: (d: DateTime) => void };
    };
  };
  date: {
    date: DateTime;
    day: string;
  }[];
  fontColor: string;
  borderColor: string;
}

const { width: windowWidth } = Dimensions.get('window');

const Time: React.FC<TimeProps> = ({
  defaultRow,
  startHour,
  startMinute,
  endHour,
  endMinute,
  intervalMinutes,
  dateTime,
  date,
  fontColor,
  borderColor,
}) => {
  const [time, setTime] = useState<string[]>();

  useEffect(() => {
    const arr = [];
    const now = DateTime.local().setLocale('ja');
    let t = now.set({ hour: startHour, minute: startMinute });
    const loop = ((endHour - startHour) * 60) / intervalMinutes + endMinute;
    arr.push(t.toFormat('HH:mm'));
    for (let i = 0; i < loop; i++) {
      t = t.plus({
        minutes: intervalMinutes,
      });
      arr.push(t.toFormat('HH:mm'));
    }
    setTime(arr);
  }, [startHour, startMinute, endHour, endMinute, intervalMinutes, dateTime]);

  return (
    <View style={TimeStyles.timeRowWrapper}>
      <View style={TimeStyles.timeWrapper}>
        {time?.map((item) => (
          <View
            key={item}
            style={[TimeStyles.time, { borderColor: borderColor }]}
          >
            <Text style={[TimeStyles.timeText, { color: fontColor }]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
      <View style={TimeStyles.markRows}>
        {time?.map((t) => (
          <View key={t} style={TimeStyles.rowWrapper}>
            {date.map((eachDate) => (
              <Row
                defaultRow={defaultRow}
                key={eachDate.date.toFormat('L/dd') + t}
                dateTimeObj={dateTime}
                date={eachDate.date}
                timeString={t}
                borderColor={borderColor}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const TimeStyles = StyleSheet.create({
  timeRowWrapper: {
    flexDirection: 'row',
  },
  timeWrapper: {
    width: windowWidth * 0.16,
  },
  time: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {},
  rowWrapper: {
    flexDirection: 'row',
  },
  markRows: {
    flexDirection: 'column',
  },
});

export default Time;
