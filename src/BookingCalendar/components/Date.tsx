import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DateProps {}
const Date: React.FC<DateProps> = () => {
  const [date, setDate] = useState<
    {
      day: string;
      date: string;
    }[]
  >();

  useEffect(() => {
    const arr = [];
    const today = DateTime.local().setLocale('ja');
    arr.push({ day: today.toFormat('L/d'), date: today.toFormat('EEEE') });
    for (let i = 1; i < 7; i++) {
      const oneDayLater = {
        day: today.plus({ day: i }).toFormat('L/d'),
        date: today.plus({ day: i }).toFormat('EEEE'),
      };
      arr.push(oneDayLater);
    }
    setDate(arr);
  }, []);

  return (
    <View style={DateStyles.dateWrapper}>
      <View style={DateStyles.date}>
        {date?.map((item) => (
          <View style={DateStyles.dateItem}>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const DateStyles = StyleSheet.create({
  dateWrapper: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  date: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'flex-end',
  },
  dateItem: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Date;
