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
  fontColor: string;
  trueSignColor: string;
  falseSignColor: string;
  borderColor: string;
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
  fontColor,
  borderColor,
  trueSignColor,
  falseSignColor,
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
                style={[
                  Platform.OS === 'android' && DateStyles.text,
                  { color: fontColor },
                ]}
              >
                {item.date.toFormat('LL/d')}
              </Text>
              <Text
                style={[
                  Platform.OS === 'android' && DateStyles.text,
                  { color: fontColor },
                ]}
              >
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
        borderColor={borderColor}
        fontColor={fontColor}
        trueSignColor={trueSignColor}
        falseSignColor={falseSignColor}
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
