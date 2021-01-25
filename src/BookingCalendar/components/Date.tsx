import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Time from './Time';

interface DateProps {}
const Date: React.FC<DateProps> = () => {
  const [date, setDate] = useState<
    {
      day: DateTime;
      date: string;
    }[]
  >([]);

  useEffect(() => {
    const arr = [];
    const today = DateTime.local().setLocale('ja');
    arr.push({ day: today, date: today.toFormat('EEEE') });
    for (let i = 1; i < 7; i++) {
      const oneDayLater = {
        day: today.plus({ day: i }),
        date: today.plus({ day: i }).toFormat('EEEE'),
      };
      arr.push(oneDayLater);
    }
    setDate(arr);
  }, []);

  return (
    <>
      <View style={DateStyles.dateWrapper}>
        <View style={DateStyles.date}>
          {date?.map((item) => (
            <View style={DateStyles.dateItem}>
              <Text>{item.day.toFormat('LL/d')}</Text>
              <Text>{item.date}</Text>
            </View>
          ))}
        </View>
      </View>
      <Time date={date} />
    </>
  );
};

const DateStyles = StyleSheet.create({
  dateWrapper: {},
  date: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'flex-end',
  },
  dateItem: {
    // borderWidth: 1,
    // borderColor: '#e0e0e0',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default Date;
