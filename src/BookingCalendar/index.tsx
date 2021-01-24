import React from 'react';
import { ScrollView } from 'react-native';
import Date from './components/Date';
import Row from './components/Row';
import Table from './components/Table';
import Time from './components/Time';

interface BookingCalendarProps {}

const BookingCalendar: React.FC<BookingCalendarProps> = () => {
  return (
    <ScrollView>
      <Table>
        <Date />
        <Time />
        <Row />
      </Table>
    </ScrollView>
  );
};

export default BookingCalendar;
