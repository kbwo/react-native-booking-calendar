# react-native-booking-calendar

calendar component for booking app

## Installation

```sh
npm install react-native-booking-calendar
```

## Dependencies

```sh
npm install luxon
npm install --save-dev @types/luxon
```
if you want to use Intl API in luxon, see https://github.com/react-native-community/jsc-android-buildscripts


## Usage

```js
import { DateTime } from 'luxon';
import { BookingCalendar } from 'react-native-booking-calendar';

// ...

const startDate = DateTime.local(2021, 3, 12).setLocale('ja');

const dateTimeObj = {
  '2021-3-14': { '12:00': true, '13:00': <Text>Tel</Text> },
};

const onButtonPress = (d: DateTime) => {
  console.log(d);
};

return (
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
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
