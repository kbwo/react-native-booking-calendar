import { DateTime } from 'luxon';
import * as React from 'react';

import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import { BookingCalendar } from 'react-native-booking-calendar';

const startDate = DateTime.local(2021, 3, 12).setLocale('ja');
const dateTimeObj = {
  '2021-3-14': { '12:00': true, '13:00': <Text>Tel</Text> },
};

export default function App() {
  const onButtonPress = (d: DateTime) => {
    console.log(d);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookingCalendar
          startDate={startDate}
          startHour={10}
          startMinute={0}
          endHour={19}
          endMinute={0}
          intervalMinutes={30}
          dateTime={dateTimeObj}
          onButtonPress={onButtonPress}
          backgroundColor="#e0e0e0"
          borderColor="pink"
          fontColor="blue"
          trueSignColor="red"
          falseSignColor="blue"
        />
      </ScrollView>
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
