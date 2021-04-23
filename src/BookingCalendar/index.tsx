import type { DateTime } from 'luxon';
import React, { ReactNode } from 'react';
import Date from './components/Date';
import Table from './components/Table';

interface BookingCalendarProps {
  defaultRow?: {
    row: ReactNode;
    onPress: (d: DateTime) => void;
  };
  startDate: DateTime;
  startTime: Date;
  endTime: Date;
  intervalMinutes: number;
  dateTime?: {
    [date: string]: {
      [time: string]: { row: ReactNode; onPress: (d: DateTime) => void };
    };
  };
  borderColor?: string;
  fontColor?: string;
  backgroundColor?: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  defaultRow,
  startDate,
  startTime,
  endTime,
  intervalMinutes,
  dateTime,
  borderColor = '#e0e0e0',
  fontColor = '#000',
  backgroundColor = '#fff',
}) => {
  return (
    <Table {...{ backgroundColor }}>
      <Date
        {...{
          defaultRow,
          startDate,
          startTime,
          endTime,
          intervalMinutes,
          dateTime,
          fontColor,
          borderColor,
        }}
      />
    </Table>
  );
};

export default BookingCalendar;
