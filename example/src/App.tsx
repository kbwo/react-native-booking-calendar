import { DateTime } from 'luxon';
import * as React from 'react';

import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { BookingCalendar } from 'react-native-booking-calendar';

const startDate = DateTime.local(2021, 3, 12).setLocale('ja');
const intervalMinutes = 30;
const dateTimeArr = {
  '2021-1-31': { '12:00': true, '13:00': <Text>Tel</Text> },
};

export default function App() {
  const onButtonPress = (d: DateTime) => {
    console.log(d);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BookingCalendar
        startDate={startDate}
        startHour={10}
        startMinute={0}
        endHour={19}
        endMinute={0}
        intervalMinutes={intervalMinutes}
        dateTime={dateTimeArr}
        onButtonPress={onButtonPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
