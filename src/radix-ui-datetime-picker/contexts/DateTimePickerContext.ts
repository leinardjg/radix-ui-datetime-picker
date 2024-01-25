import { createContext } from "react";
import { DateTimePickerOptions } from "../types/options";

interface DateTimePickerContextType {
    currentDate? : Date;
    onDateChange? : (date : Date) => void;

    viewDate: Date;

    selectedDate?: Date;
    setSelectedDate? : (date : Date) => void;

    dateTimePickerOptions? : DateTimePickerOptions
}

const DateTimePickerContext = createContext<DateTimePickerContextType>({
    viewDate: new Date()
});

export default DateTimePickerContext;