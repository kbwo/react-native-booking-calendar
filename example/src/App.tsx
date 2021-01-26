import { DateTime } from 'luxon';
import * as React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { BookingCalendar } from 'react-native-booking-calendar';

const startDate = DateTime.local(2021, 3, 12).setLocale('ja');

export default function App() {
  const onButtonPress = (d: DateTime) => {
    console.log(d);
    Alert.alert('pressed: ' + d.toString());
  };
  const dateTimeObj = {
    '2021-3-12': {
      '10:00': {
        row: <Text style={styles.enableButton}>〇</Text>,
        onPress: onButtonPress,
      },
      '16:30': {
        row: <Text style={styles.telButton}>Tel</Text>,
        onPress: onButtonPress,
      },
    },
    '2021-3-14': {
      '12:00': {
        row: <Text style={styles.enableButton}>〇</Text>,
        onPress: onButtonPress,
      },
      '13:00': {
        row: <Text style={styles.telButton}>Tel</Text>,
        onPress: onButtonPress,
      },
    },
  };

  const defaultRow = {
    row: <Text style={styles.disableButton}>× </Text>,
    onPress: onButtonPress,
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BookingCalendar
          defaultRow={defaultRow}
          startDate={startDate}
          startHour={10}
          startMinute={0}
          endHour={19}
          endMinute={0}
          intervalMinutes={30}
          dateTime={dateTimeObj}
          backgroundColor="#fff"
          borderColor="#e0e0e0"
          fontColor="#000"
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
  enableButton: {
    fontSize: 24,
    color: 'tomato',
    fontWeight: 'bold',
  },
  disableButton: {
    fontSize: 28,
    color: 'grey',
  },
  telButton: {
    fontSize: 20,
    color: 'green',
  },
});
