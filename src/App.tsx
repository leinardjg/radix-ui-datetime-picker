import '@radix-ui/themes/styles.css';
import "./App.css";
import DateTimePicker from './radix-ui-datetime-picker/DateTimePicker';
import { Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState<Date | null>(null);

  return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <Flex justify="center" align="center" mb="6">
            <Button variant="ghost">
              {
                date?.toLocaleString() ?? "Select a date"
              }
            </Button>
          </Flex>
          <DateTimePicker timeLabel="Available Times" label="Select date and time" onChange={setDate} dateTimePickerOptions={{
            timeOptions: {
              from: 9 * 60,
              to: 21 * 60,
              interval: 30
            },
            sunday: {
              from: 10 * 60,
              to: 17 * 60,
            }
          }} />
        </div>
      </div>
  );
}

export default App;
