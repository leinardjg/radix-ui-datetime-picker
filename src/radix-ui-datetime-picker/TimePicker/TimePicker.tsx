import { useContext } from "react";
import DateTimePickerContext from "../contexts/DateTimePickerContext";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import { TimeOptions } from "../types/options";
import { HHMM12ToMinutes, hoursToMinutes, minutesToHHMM12, minutesToMilliseconds } from "../utils/TimeUtils";

interface TimePickerProps {
    timePickerLabel? : string;
}

export default function TimePicker(props : TimePickerProps) {

    const context = useContext(DateTimePickerContext);

    //#region if no selected

    const NoSelected = <div className="w-full h-full overflow-hidden">
        <Flex justify="center" py="3">
            <Text size="2" weight="medium">
                { props.timePickerLabel }
            </Text>
        </Flex>
        <div className="w-full flex justify-center items-center h-full">
            <Text size="2">
                No date selected.
            </Text>
        </div>
    </div>

    if (!context.selectedDate) return NoSelected;

    //#endregion

    let timeOptions : TimeOptions | undefined;

    switch(context.selectedDate.getDay()) {
        case (0): timeOptions = context.dateTimePickerOptions?.sunday; break;
        case (1): timeOptions = context.dateTimePickerOptions?.monday; break;
        case (2): timeOptions = context.dateTimePickerOptions?.tuesday; break;
        case (3): timeOptions = context.dateTimePickerOptions?.wednesday; break;
        case (4): timeOptions = context.dateTimePickerOptions?.thursday; break;
        case (5): timeOptions = context.dateTimePickerOptions?.friday; break;
        case (6): timeOptions = context.dateTimePickerOptions?.saturday; break;
    }

    if (!timeOptions) timeOptions = context.dateTimePickerOptions?.timeOptions;

    // default from midnight
    let from = timeOptions?.from ? HHMM12ToMinutes(timeOptions.from) : 0;
    // default to 11pm
    const to = timeOptions?.to ? HHMM12ToMinutes(timeOptions.to) : hoursToMinutes(23.75);
    // default to 1 hour
    const interval = timeOptions?.interval ?? hoursToMinutes(1);

    const buttons : React.ReactNode[] = [];
    const timeSlots = [];

    while (from < to) {
        timeSlots.push(from);
        from += interval;
    }

    function onClickHandler(date : Date) {
        if (!context.onDateChange) return;
        context.onDateChange(date);
    }

    timeSlots.forEach(timeSlot => {
        let date : Date;
        if (!context.selectedDate) date = new Date();
        else {
            date = new Date(
                    (new Date(context.selectedDate.getFullYear(), context.selectedDate.getMonth(), context.selectedDate.getDate())).getTime() + minutesToMilliseconds(timeSlot));
        }

        const timeLabel = minutesToHHMM12(timeSlot);

        buttons.push(
            <Button variant="outline" radius="full" onClick={() => {onClickHandler(date)}}>
                {
                    `${timeLabel.hour.toString()}:${timeLabel.minute.toString().padEnd(2, "0")} ${timeLabel.period}`
                }
            </Button>
        )
    })

    return <div className="h-full w-full overflow-hidden">
        <Flex justify="center" py="3">
            <Text size="2" weight="medium">
                { props.timePickerLabel }
            </Text>
        </Flex>
        <div className="overflow-auto h-[85%]">
            <Grid gap={"1"} columns={"2"}>
                {
                    buttons
                }
            </Grid>
        </div>
    </div>

}