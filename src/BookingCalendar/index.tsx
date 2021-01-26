import type { DateTime } from 'luxon';
import React, { ReactNode } from 'react';
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
    [date: string]: {
      [time: string]: { row: ReactNode; onPress: (d: DateTime) => void };
    };
  };
  borderColor?: string;
  fontColor?: string;
  backgroundColor?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  startDate,
  startHour,
  startMinute,
  endHour,
  endMinute,
  intervalMinutes,
  dateTime,
  borderColor = '#e0e0e0',
  fontColor = '#000',
  backgroundColor = '#fff',
}) => {
  return (
    <Table backgroundColor={backgroundColor}>
      <Date
        startDate={startDate}
        startHour={startHour}
        startMinute={startMinute}
        endHour={endHour}
        endMinute={endMinute}
        intervalMinutes={intervalMinutes}
        dateTime={dateTime}
        fontColor={fontColor}
        borderColor={borderColor}
      />
    </Table>
  );
};

export default BookingCalendar;
