import { createContext } from "react";

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