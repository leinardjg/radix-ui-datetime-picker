import { Dispatch, SetStateAction, createContext } from "react";
import DateTimePicker from "../old/DateTimePicker";

interface DateTimePickerContextType {
    currentDate? : Date;
    onDateChange? : (date : Date) => void;

    viewDate: Date;

    selectedDate?: Date;
    setSelectedDate? : (date : Date) => void;
}

const DateTimePickerContext = createContext<DateTimePickerContextType>({
    viewDate: new Date()
});

export default DateTimePickerContext;