import type { DateTime } from 'luxon';
import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import Date from './components/Date';
import Table from './components/Table';

interface BookingCalendarProps {
  startDate: DateTime;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  intervalMinutes: number;
  dateTime: {
    [date: string]: { [time: string]: boolean | string | ReactNode };
  };
  onButtonPress: (date: DateTime) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  startDate,
  startHour,
  startMinute,
  endHour,
  endMinute,
  intervalMinutes,
  dateTime,
  onButtonPress,
}) => {
  return (
    <ScrollView>
      <Table>
        <Date
          startDate={startDate}
          startHour={startHour}
          startMinute={startMinute}
          endHour={endHour}
          endMinute={endMinute}
          intervalMinutes={intervalMinutes}
          dateTime={dateTime}
          onButtonPress={onButtonPress}
        />
      </Table>
    </ScrollView>
  );
};

export default BookingCalendar;
