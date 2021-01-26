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
    [date: string]: { [time: string]: boolean | string | ReactNode };
  };
  onButtonPress: (date: DateTime) => void;
  borderColor?: string;
  fontColor?: string;
  trueSignColor?: string;
  falseSignColor?: string;
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
  onButtonPress,
  borderColor = '#e0e0e0',
  trueSignColor = 'tomato',
  falseSignColor = 'dodgerblue',
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
        onButtonPress={onButtonPress}
        fontColor={fontColor}
        borderColor={borderColor}
        trueSignColor={trueSignColor}
        falseSignColor={falseSignColor}
      />
    </Table>
  );
};

export default BookingCalendar;
