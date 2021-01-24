import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const interval = 30;
const startHour = 0;
const startMinute = 0;
const endHour = 24;
const endMinute = 0;

interface TimeProps {}
const Time: React.FC<TimeProps> = () => {
  const [time, setTime] = useState<string[]>();

  useEffect(() => {
    const arr = [];
    const now = DateTime.local().setLocale('ja');
    let t = now.set({ hour: startHour, minute: startMinute });
    const loop = (endHour * 60) / interval + endMinute;
    arr.push(t.toFormat('HH:mm'));
    for (let i = 0; i < loop; i++) {
      t = t.plus({
        minutes: interval,
      });
      arr.push(t.toFormat('HH:mm'));
    }
    setTime(arr);
  }, []);

  console.log(time);

  return (
    <View style={TimeStyles.timeWrapper}>
      {time?.map((item) => (
        <View style={TimeStyles.time}>
          <Text style={TimeStyles.timeText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const TimeStyles = StyleSheet.create({
  timeWrapper: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: 60,
  },
  time: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {},
});

export default Time;
