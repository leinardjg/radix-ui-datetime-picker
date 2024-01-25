import { Flex } from "@radix-ui/themes";
import { DateTimePickerOptions } from "./types/options";
import DatePicker from "./DatePicker/DatePicker";
import TimePicker from "./TimePicker/TimePicker";
import { Dispatch, SetStateAction } from "react";
import DateTimePickerContext from "./contexts/DateTimePickerContext";

interface DateTimePickerProps {
    dateTimePickerOptions? : DateTimePickerOptions;

    currentDate : Date;
    onDateChange : (date : Date) => void | Dispatch<SetStateAction<Date>>;
}

export default function DateTimePicker(props : DateTimePickerProps) {

    return <>
    
        <div className="md:h-[275px] md:w-[500px]">

            <DateTimePickerContext.Provider value={{
                currentDate: props.currentDate,
                onDateChange: props.onDateChange,
                viewDate: props.currentDate
            }}>

                <Flex justify="between" gap="4" direction={{
                        initial: "column",
                        sm: "row"
                    }} height="100%">

                    <DatePicker />

                    <TimePicker />

                </Flex>

            </DateTimePickerContext.Provider>

        </div>

    </>
    
}