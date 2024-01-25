import { CalendarIcon } from "@radix-ui/react-icons";
import { Button, Popover, TextField } from "@radix-ui/themes";
import DateTimePicker from "./DateTimePicker";
import { Dispatch, SetStateAction } from "react";

interface DateTimePickerFieldProps {

    /**
     * Date state to be reflected in the field.
     */
    date : Date;

    /**
     * Date state setter.
     */
    setDate : Dispatch<SetStateAction<Date>>;
}

export default function DateTimePickerField(props : DateTimePickerFieldProps) {
    return <>
    
    <Popover.Root>

        <Popover.Trigger>
            <TextField.Root>
                <TextField.Input value={props.date.toLocaleString("en-GB", {
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
                currentDate={props.date}
                onDateChange={props.setDate}
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