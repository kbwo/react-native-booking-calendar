import type { DateTime } from 'luxon';
import React, { ReactNode, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Time from './Time';

interface DateProps {
  defaultRow?: {
    row: ReactNode;
    onPress: (d: DateTime) => void;
  };
  startDate: DateTime;
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
  fontColor: string;
  borderColor: string;
}

const { width: windowWidth } = Dimensions.get('window');

const Date: React.FC<DateProps> = ({
  defaultRow,
  startDate,
  startHour,
  startMinute,
  endHour,
  endMinute,
  intervalMinutes,
  dateTime,
  fontColor,
  borderColor,
}) => {
  const [date, setDate] = useState<
    {
      date: DateTime;
      day: string;
    }[]
  >([]);

  useEffect(() => {
    const arr = [];
    arr.push({ date: startDate, day: startDate.toFormat('EEEE') });
    for (let i = 1; i < 7; i++) {
      const oneDayLater = {
        date: startDate.plus({ day: i }),
        day: startDate.plus({ day: i }).toFormat('EEEE'),
      };
      arr.push(oneDayLater);
    }
    setDate(arr);
  }, [startDate]);

  return (
    <>
      <View style={DateStyles.dateWrapper}>
        <View style={DateStyles.date}>
          <View
            style={[DateStyles.rightBorder, { borderColor: borderColor }]}
          />
          {date?.map((item) => (
            <View
              key={item.day}
              style={[DateStyles.dateItem, { borderColor: borderColor }]}
            >
              <Text
                style={[DateStyles.text, { color: fontColor }]}
                adjustsFontSizeToFit={true}
              >
                {item.date.toFormat('LL/d')}
              </Text>
              <Text
                style={[DateStyles.text, { color: fontColor }]}
                adjustsFontSizeToFit={true}
              >
                {item.day}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Time
        defaultRow={defaultRow}
        startHour={startHour}
        startMinute={startMinute}
        endHour={endHour}
        endMinute={endMinute}
        intervalMinutes={intervalMinutes}
        dateTime={dateTime}
        date={date}
        borderColor={borderColor}
        fontColor={fontColor}
      />
    </>
  );
};

const DateStyles = StyleSheet.create({
  dateWrapper: {},
  rightBorder: {
    borderRightWidth: 1,
  },
  date: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-end',
  },
  dateItem: {
    width: windowWidth * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  text: {
    fontSize: 12,
  },
});

export default Date;
