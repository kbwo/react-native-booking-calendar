import React from 'react';
import { ScrollView } from 'react-native';
import Date from './components/Date';
import Table from './components/Table';

interface BookingCalendarProps {}

const BookingCalendar: React.FC<BookingCalendarProps> = () => {
  return (
    <ScrollView>
      <Table>
        <Date />
        {/* <Time /> */}
      </Table>
    </ScrollView>
  );
};

export default BookingCalendar;
