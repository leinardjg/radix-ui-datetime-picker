import '@radix-ui/themes/styles.css';
import "./App.css";
import DateTimePicker from './radix-ui-datetime-picker/DateTimePicker';
import { Button, Flex, Popover, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';

function App() {

const [date, setDate] = useState<Date>(new Date());

return (
	<div className="h-screen w-screen flex justify-center items-center">
		<div>
			<Flex justify="center" align="center" mb="6">

				<Popover.Root>

				<Popover.Trigger>
					<TextField.Root>
						<TextField.Input value={date.toLocaleString("en-GB", {
							day: "numeric",
							month: "short",
							year: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: undefined
						})} />
						<TextField.Slot pr="0">
							<Button variant="soft">
							<CalendarIcon />
							</Button>
						</TextField.Slot>
					</TextField.Root>
				</Popover.Trigger>

				<Popover.Content>
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
				</Popover.Content>
				
				</Popover.Root>
			</Flex>
		</div>
	</div>
);
}

export default App;
