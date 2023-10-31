import { Button, Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { DateTimePickerOptions, TimeOptions } from "./DateTimePickerUtils";

interface TimePickerProps {

    timeOptions? : TimeOptions;

    /**
     * Time interval between 2 times.
     */
    interval? : number

    label : string;

    selectedDateTime : Date | null;
    onChange : (date : Date) => void;
}

function TimePicker(props : TimePickerProps) {

    if (!props.selectedDateTime) {
        return <div className="w-full h-full">
        <Flex justify="center" py="3">
            <Text size="2" weight="medium">
                { props.label }
            </Text>
        </Flex>
        <div className="w-full flex justify-center items-center h-full">
            <Text size="2">
                No date selected.
            </Text>
        </div>
    </div>
    }

    let from = props.timeOptions?.from ? props.timeOptions.from * 60 * 1000 : 0;
    const to = props.timeOptions?.to ? props.timeOptions.to * 60 * 1000 : 82800000;
    const interval = props.timeOptions?.interval ? props.timeOptions.interval * 60 * 1000 : 60 * 60 * 1000;

    const timeSlots = [];

    while (from < to) {
        timeSlots.push(from);
        from += interval;
    }

    const buttons : React.ReactNode[] = [];

    timeSlots.forEach(timeSlot => {
        const time = new Date((new Date(props.selectedDateTime!.getFullYear(), props.selectedDateTime!.getMonth(), props.selectedDateTime!.getDate())).getTime()
            + timeSlot);
        const label = `${time.getHours() % 12 === 0 ? 12 : time.getHours() % 12}:${time.getMinutes().toLocaleString("en-US", {
            minimumIntegerDigits: 2
        })} ${time.getHours() <= 11 ? "AM" : "PM"}`;
        buttons.push(
            <Button variant="outline" radius="full" onClick={() => props.onChange(time)}>
                {
                    label
                }
            </Button>
        )
    })

    return (
        <div className="h-full w-full overflow-hidden">
            <Flex justify="center" py="3">
                <Text size="2" weight="medium">
                    { props.label }
                </Text>
            </Flex>
            <div className="overflow-auto h-[85%]">
                <Grid gap={"1"} columns={"2"}>
                    { buttons }
                </Grid>
            </div>
        </div>
    )
}

interface DatePickerProps {
    month : number;
    setMonthYear : React.Dispatch<React.SetStateAction<number[]>>;
    year : number;
    dateTimePickerOptions? : DateTimePickerOptions;
    selectedDateTime : Date | null;
    setSelectedDateTime : React.Dispatch<React.SetStateAction<Date | null>>;
    setTimeOptions : React.Dispatch<React.SetStateAction<TimeOptions>>;
}

function DatePicker(props : DatePickerProps) {

    const date = new Date(props.year, props.month + 1, 0);
    const monthLabel = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][props.month];

    const Day = (dayProps : { day : number, disabled? : boolean, timeOptions? : TimeOptions, setTimeOptions : React.Dispatch<React.SetStateAction<TimeOptions>>; }) => {

        const selected = props.selectedDateTime ? (
            props.selectedDateTime.getFullYear() === props.year &&
            props.selectedDateTime.getMonth() === props.month &&
            props.selectedDateTime.getDate() === dayProps.day
        ) : null;

        const onClickHandler = () => {
            const today = new Date(props.year, props.month, dayProps.day);
            props.setSelectedDateTime(today);
            props.setTimeOptions(dayProps.timeOptions ?? {
                from: 0,
                to: 23 * 60,
                interval: 60
            });
        }

        const enabled = <div 
            onClick={onClickHandler}
            className={`rounded-md flex justify-center items-center hover:bg-indigo3 cursor-pointer h-8 w-8 
                ${selected ? "bg-indigo3 text-indigo11" : "" }`}>
            { dayProps.day }
        </div>

        const disabled = <div 
            className="rounded-md flex justify-center items-center cursor-default h-8 w-8 text-slate7">
            { dayProps.day }
        </div>

        return dayProps.disabled ? disabled : enabled
    }

    function spawnDays() {
        const numDays = date.getDate();
        const days = [];

        days.push(
            [
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">SUN</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">MON</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">TUE</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">WED</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">THU</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">FRI</Text>
                </div>,
                <div className="flex justify-center items-center h-8 w-8">
                    <Text size="1">SAT</Text>
                </div>
            ]
        )
        
        const weekday = new Date(props.year, props.month, 1).getDay();
        for (let i=0; i < weekday; i++) {
            days.push(<div key={i + 31} />)
        }

        for (let i=1; i < numDays + 1; i++) {
            
            if (props.dateTimePickerOptions) {

                let timeOptions = props.dateTimePickerOptions.timeOptions
                const day = new Date(props.year, props.month, i).getDay();

                switch (day) {
                    case 0: {
                        timeOptions = props.dateTimePickerOptions.sunday ?? timeOptions;
                        break;
                    }
                    case 1: {
                        timeOptions = props.dateTimePickerOptions.monday ?? timeOptions;
                        break;
                    }
                    case 2: {
                        timeOptions = props.dateTimePickerOptions.tuesday ?? timeOptions;
                        break;
                    }
                    case 3: {
                        timeOptions = props.dateTimePickerOptions.wednesday ?? timeOptions;
                        break;
                    }
                    case 4: {
                        timeOptions = props.dateTimePickerOptions.thursday ?? timeOptions;
                        break;
                    }
                    case 5: {
                        timeOptions = props.dateTimePickerOptions.friday ?? timeOptions;
                        break;
                    }
                    case 6: {
                        timeOptions = props.dateTimePickerOptions.saturday ?? timeOptions;
                        break;
                    }
                }

                days.push(<Day day={i} key={i} timeOptions={timeOptions} setTimeOptions={props.setTimeOptions} />)

            } else {
                days.push(<Day day={i} key={i} setTimeOptions={props.setTimeOptions} />);
            }
        }
        return days;
    }

    const prevMonthHandler = () => {
        if (props.month === 0) {
            props.setMonthYear([11, props.year - 1]);
        } else {
            props.setMonthYear([props.month - 1, props.year]);
        }
    }

    const nextMonthHandler = () => {
        if (props.month === 11) {
            props.setMonthYear([0, props.year + 1]);
        } else {
            props.setMonthYear([props.month + 1, props.year]);
        }
    }

    return (
        <div className="min-w-fit">
            <Flex justify="between" align="center" py="3">
                <IconButton variant="ghost" onClick={prevMonthHandler}>
                    <ChevronLeftIcon />
                </IconButton>
                    <div>
                        <Text size="2" weight="medium">
                            { monthLabel } { props.year }
                        </Text>
                    </div>
                <IconButton variant="ghost" onClick={nextMonthHandler}>
                    <ChevronRightIcon />
                </IconButton>
            </Flex>
            <Grid columns="7" gapX="3" gapY="2">
                {
                    spawnDays()
                }
            </Grid>
        </div>
    )
}

interface DateTimePickerProps {

    label? : string;

    dateLabel? : string;

    timeLabel? : string;

    dateFormat? : string;

    timeFormat? : string;

    onChange? : (date : Date) => void;

    /**
     * An integer [0, 11] representing the month to display. If null, today.
     */
    month? : number;

    /**
     * A valid integer representing a year. If null, today.
     */
    year? : number;

    dateTimePickerOptions? : DateTimePickerOptions;

}

export default function DateTimePicker(props : DateTimePickerProps) {

    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
    const [timeOptions, setTimeOptions] = useState<TimeOptions>({});
    const [monthYear, setMonthYear] = useState<number[]>([props.month ?? new Date(Date.now()).getMonth(), props.year ?? new Date().getFullYear()]);

    const handleChange = (date : Date) => {
        setSelectedDateTime(date);
        if (props.onChange) props.onChange(date);
    }

    return (<>

        <div className="md:h-[275px] md:w-[500px]">
    
            <Flex justify="between" gap="4" direction={{
                initial: "column",
                sm: "row"
            }} height="100%">
                <DatePicker 
                    month={monthYear[0]} 
                    year={monthYear[1]}
                    setMonthYear={setMonthYear}
                    selectedDateTime={selectedDateTime} 
                    setSelectedDateTime={setSelectedDateTime}
                    dateTimePickerOptions={props.dateTimePickerOptions}
                    setTimeOptions={setTimeOptions}
                    />
                <TimePicker
                    label={props.timeLabel ?? ""}
                    timeOptions={timeOptions}
                    selectedDateTime={selectedDateTime}
                    onChange={handleChange} />
            </Flex>
            
        </div>
    
    </>)
}