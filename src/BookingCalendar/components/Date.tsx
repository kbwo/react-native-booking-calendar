import type { DateTime } from 'luxon';
import React, { ReactNode, useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import Time from './Time';

interface DateProps {
  startDate: DateTime;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  intervalMinutes: number;
  dateTime: {
    [date: string]: { [time: string]: boolean | string | ReactNode };
  };
  onButtonPress: (date: DateTime) => void;
}

const { width: windowWidth } = Dimensions.get('window');

const Date: React.FC<DateProps> = ({
  startDate,
  startHour,
  startMinute,
  endHour,
  endMinute,
  intervalMinutes,
  dateTime,
  onButtonPress,
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
          <View style={DateStyles.rightBorder} />
          {date?.map((item) => (
            <View key={item.day} style={DateStyles.dateItem}>
              <Text style={Platform.OS === 'android' && DateStyles.text}>
                {item.date.toFormat('LL/d')}
              </Text>
              <Text style={Platform.OS === 'android' && DateStyles.text}>
                {item.day}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Time
        startHour={startHour}
        startMinute={startMinute}
        endHour={endHour}
        endMinute={endMinute}
        intervalMinutes={intervalMinutes}
        dateTime={dateTime}
        onButtonPress={onButtonPress}
        date={date}
      />
    </>
  );
};

const DateStyles = StyleSheet.create({
  dateWrapper: {},
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  date: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'flex-end',
  },
  dateItem: {
    width: windowWidth * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e0e0e0',
  },
  text: {
    fontSize: 12,
  },
});

export default Date;
