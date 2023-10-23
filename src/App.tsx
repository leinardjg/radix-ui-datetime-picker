import '@radix-ui/themes/styles.css';
import "./App.css";
import DateTimePicker from './radix-ui-datetime-picker/DateTimePicker';

function App() {
  return (
      <div className="h-screen w-screen flex justify-center items-center">
        <DateTimePicker timeLabel="Available Times" label="Select date and time" dateTimePickerOptions={{
          timeOptions: {
            from: 9 * 60,
            to: 21 * 60,
            interval: 60
          },
          sunday: {
            from: 10 * 60,
            to: 17 * 60,
          }
        }} />
      </div>
  );
}

export default App;
