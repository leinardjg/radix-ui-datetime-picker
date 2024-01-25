import { CalendarIcon } from "@radix-ui/react-icons";
import { Button, Popover, TextField } from "@radix-ui/themes";
import DateTimePicker from "./DateTimePicker";
import { Dispatch, SetStateAction, useState } from "react";

interface DateTimePickerFieldProps {

    /**
     * Date state to be reflected in the field.
     */
    date? : Date;

    /**
     * Handler for date change.
     */
    onDateChange? : (date : Date) => void;
}

export default function DateTimePickerField(props : DateTimePickerFieldProps) {

    const [displayedDate, setDisplayedDate] = useState<Date>(props.date ?? new Date());

    return <>
    
    <Popover.Root>

        <Popover.Trigger>
            <TextField.Root>
                <TextField.Input value={displayedDate.toLocaleString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: undefined
                })} onChange={() => {}} />
                <TextField.Slot pr="0">
                    <Button variant="soft">
                    <CalendarIcon />
                    </Button>
                </TextField.Slot>
            </TextField.Root>
        </Popover.Trigger>

        <Popover.Content>
            <DateTimePicker 
                currentDate={displayedDate}
                onDateChange={date => {
                    setDisplayedDate(date);
                    if (props.onDateChange) props.onDateChange(date);
                }}
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

    </>
}