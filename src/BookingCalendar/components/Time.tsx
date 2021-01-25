import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Row from './Row';

const interval = 30;
const startHour = 5;
const startMinute = 0;
const endHour = 24;
const endMinute = 0;

interface TimeProps {
  date: {
    day: DateTime;
    date: string;
  }[];
}

const { width: windowWidth } = Dimensions.get('window');

const dateTimeArr = {
  '2021-1-31': { '12:00': true, '13:00': <Text>Tel</Text> },
};

const Time: React.FC<TimeProps> = ({ date }) => {
  const [time, setTime] = useState<string[]>();

  useEffect(() => {
    const arr = [];
    const now = DateTime.local().setLocale('ja');
    let t = now.set({ hour: startHour, minute: startMinute });
    const loop = ((endHour - startHour) * 60) / interval + endMinute;
    arr.push(t.toFormat('HH:mm'));
    for (let i = 0; i < loop; i++) {
      t = t.plus({
        minutes: interval,
      });
      arr.push(t.toFormat('HH:mm'));
    }
    setTime(arr);
  }, []);

  return (
    <View style={TimeStyles.timeRowWrapper}>
      <View style={TimeStyles.timeWrapper}>
        {time?.map((item) => (
          <View key={item} style={TimeStyles.time}>
            <Text style={TimeStyles.timeText}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={TimeStyles.markRows}>
        {time?.map((t) => (
          <View key={t} style={TimeStyles.rowWrapper}>
            {date.map((eachDate) => (
              <Row
                key={eachDate.day.toFormat('L/dd') + t}
                dateTimeObj={dateTimeArr}
                date={eachDate.day}
                timeString={t}
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
    borderColor: '#e0e0e0',
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
