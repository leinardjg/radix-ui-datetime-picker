import '@radix-ui/themes/styles.css';
import "./App.css";
import { Button, Flex, Popover, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import DateTimePicker from './radix-ui-datetime-picker/DateTimePicker';
import DateTimePickerField from './radix-ui-datetime-picker/DateTimePickerField';

function App() {

const [date, setDate] = useState<Date>(new Date());

return (
	<div className="h-screen w-screen flex justify-center items-center gap-2">

		<div>
			<Flex justify="center" align="center" mb="6">
				<DateTimePickerField date={date} setDate={setDate} />
			</Flex>
		</div>
	</div>
);
}

export default App;
