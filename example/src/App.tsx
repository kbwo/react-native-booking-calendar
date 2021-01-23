import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { BookingCalendar } from 'react-native-booking-calendar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BookingCalendar />
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
