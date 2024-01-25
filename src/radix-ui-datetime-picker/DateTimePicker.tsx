import { Flex } from "@radix-ui/themes";
import { DateTimePickerOptions } from "./types/options";
import DatePicker from "./DatePicker/DatePicker";
import TimePicker from "./TimePicker/TimePicker";
import { Dispatch, SetStateAction, useState } from "react";
import DateTimePickerContext from "./contexts/DateTimePickerContext";

interface DateTimePickerProps {
    dateTimePickerOptions? : DateTimePickerOptions;
    timePickerLabel? : string

    currentDate : Date;
    onDateChange : (date : Date) => void | Dispatch<SetStateAction<Date>>;
}

export default function DateTimePicker(props : DateTimePickerProps) {

    const [selectedDate, setSelectedDate] = useState<Date>();

    return <>
    
        <div className="md:h-[275px] md:w-[500px]">

            <DateTimePickerContext.Provider value={{
                currentDate: props.currentDate,
                onDateChange: props.onDateChange,
                viewDate: props.currentDate,
                dateTimePickerOptions: props.dateTimePickerOptions,
                selectedDate: selectedDate,
                setSelectedDate: setSelectedDate,
            }}>

                <Flex justify="between" gap="4" direction={{
                        initial: "column",
                        sm: "row"
                    }} height="100%">

                    <DatePicker />

                    <TimePicker timePickerLabel={props.timePickerLabel} />

                </Flex>

            </DateTimePickerContext.Provider>

        </div>

    </>
    
}