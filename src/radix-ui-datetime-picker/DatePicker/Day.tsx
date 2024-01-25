import { useContext } from "react"
import DateTimePickerContext from "../contexts/DateTimePickerContext"
import { Text } from "@radix-ui/themes";

interface DayProps {
    day: number
}

export function Day(props : DayProps) {

    const context = useContext(DateTimePickerContext);
    const thisDate = new Date(context.viewDate.getFullYear(), context.viewDate.getMonth(), props.day);

    function onClickHandler() {
        if (context.setSelectedDate) context.setSelectedDate(thisDate);
    }

    function Enabled() {
        return <div 
            onClick={onClickHandler}
            className={`rounded-md flex justify-center items-center hover:bg-indigo3 cursor-pointer h-8 w-8 
                ${context.selectedDate?.getTime() == thisDate.getTime() ? "bg-indigo3 text-indigo11" : "" }`}>
            { props.day }
        </div>
    }

    function Disabled() {
        return <div className="rounded-md flex justify-center items-center cursor-default h-8 w-8 text-slate7">
            { props.day }
        </div>
    }

    return <Enabled />

}

export function Days() {

    const context = useContext(DateTimePickerContext);
    const numberOfDays = new Date(context.viewDate.getFullYear(), context.viewDate.getMonth() + 1, 0).getDate() + 1;
    const days = [];

    days.push(
        [
            <div className="flex justify-center items-center h-8 w-8" key="sun">
                <Text size="1">SUN</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="mon">
                <Text size="1">MON</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="tue">
                <Text size="1">TUE</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="wed">
                <Text size="1">WED</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="thu">
                <Text size="1">THU</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="fri">
                <Text size="1">FRI</Text>
            </div>,
            <div className="flex justify-center items-center h-8 w-8" key="sat">
                <Text size="1">SAT</Text>
            </div>
        ]
    )

    // padding
    const weekday = new Date(context.viewDate.getFullYear(), context.viewDate.getMonth(), 1).getDay();
    for (let i=0; i < weekday; i++) {
        days.push(<div key={i + 32} />)
    }

    for (let i=1; i < numberOfDays; i++) {
        days.push(
            <Day day={i} key={i} />
        )
    }

    return <>
        { days }
    </>
}