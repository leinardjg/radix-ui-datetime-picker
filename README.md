# Radix DateTimePicker

A simple Date picker using [Radix](https://www.radix-ui.com) and [Tailwind](https://tailwindcss.com).

<img src="https://s6.gifyu.com/images/S8jFj.gif" width="512" />

## Dependencies

- [Radix Themes](https://www.npmjs.com/package/@radix-ui/themes)
- [Radix Icons](https://www.npmjs.com/package/@radix-ui/react-icons)

## Usage

```
function myFunction (date : Date) { ... }
<DateTimePicker onChange={myFunction} />
```

## Props

| prop                   | type                  | description                                                                  |
|------------------------|-----------------------|------------------------------------------------------------------------------|
| `onChange?`               | `(date : Date) => void` | Callback on value change.                                                    |
| `timeLabel?`             | `string`                | TimePicker label.                                                            |
| `month?`                 | `number`                | Default month index [0, 11] to display. Displays current month if undefined. |
| `year?`                  | `number`                | Default year to display. Displays current year if undefined.                 |
| `dateTimePickerOptions?` | `DateTimePickerOptions` | Time options for the days.                                                   |

## DateTimePickerOptions

DateTimePicker accepts a `DateTimePickerOption` prop to specify which times choices to display for each day. Also allows for different `TimeOptions` for specific days of the week. Default is 12am to 10pm with 1 hour intervals.

|              | type        | description                                        |
|--------------|-------------|----------------------------------------------------|
| `timeOptions?` | `TimeOptions` | TimeOptions for every day. Default if null.        |
| `monday?`      | `TimeOptions` | TimeOptions for Mondays. `timeOptions` if null.    |
| `tuesday?`     | `TimeOptions` | TimeOptions for Tuesdays. `timeOptions` if null.   |
| `wednesday?`   | `TimeOptions` | TimeOptions for Wednesdays. `timeOptions` if null. |
| `thursday?`    | `TimeOptions` | TimeOptions for Thursdays. `timeOptions` if null.  |
| `friday?`      | `TimeOptions` | TimeOptions for Fridays. `timeOptions` if null.    |
| `saturday?`    | `TimeOptions` | TimeOptions for Saturdays. `timeOptions` if null.  |
| `sunday?`      | `TimeOptions` | TimeOptions for Sundays. `timeOptions` if null.    |

## TimePickerOptions

Defines when the `TimePicker` should start `from` and end `to`, of `interval` intervals.

|           | type   | description                      |
|-----------|--------|----------------------------------|
| `from?`     | `number` | Number in minutes from midnight. |
| `to?`       | `number` | Number in minutes from midnight. |
| `interval?` | `number` | Number in minutes.               |
