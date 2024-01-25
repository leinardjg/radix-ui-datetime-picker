import '@radix-ui/themes/styles.css';
import "./App.css";
import { Button, Flex, Popover, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import DateTimePicker from './radix-ui-datetime-picker/DateTimePicker';

function App() {

const [date, setDate] = useState<Date>(new Date());

return (
	<div className="h-screen w-screen flex justify-center items-center gap-2">

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
					<DateTimePicker 
						currentDate={date}
						onDateChange={setDate}
						timePickerLabel="Available Times"
						dateTimePickerOptions={{
							timeOptions: {
								from: {
									hour: 9,
									minute: 0,
									period: "AM"
								},
								to: {
									hour: 10,
									minute: 30,
									period: "PM"
								},
								interval: 15
							}
						}}
						/>
				</Popover.Content>
				
				</Popover.Root>
			</Flex>
		</div>
	</div>
);
}

export default App;
