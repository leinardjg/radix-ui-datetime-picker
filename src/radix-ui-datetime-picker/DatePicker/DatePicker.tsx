import { useContext, useState } from "react";
import DateTimePickerContext from "../contexts/DateTimePickerContext";
import { Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Days } from "./Day";

export default function DatePicker() {

    const context = useContext(DateTimePickerContext);
    const [viewDate, setViewDate] = useState<Date>(context.viewDate);

    context.viewDate = viewDate;

    function prevMonthHandler() {
        setViewDate(
            new Date(
                viewDate.getFullYear(), 
                (viewDate.getMonth() - 1) % 12, 
                1)
        );
    }

    function nextMonthHandler() {
        setViewDate(
            new Date(
                viewDate.getMonth() === 11 ? viewDate.getFullYear() + 1 : viewDate.getFullYear(), 
                (viewDate.getMonth() + 1) % 12, 
                1)
        );
    }

    return <>
    
        <div className="min-w-fit">
            <Flex justify="between" align="center" py="3">
                <IconButton variant="ghost" onClick={prevMonthHandler}>
                    <ChevronLeftIcon />
                </IconButton>
                    <div>
                        <Text size="2" weight="medium">
                            { viewDate.toLocaleString(
                                "default", {
                                    month: "long"
                                }
                            ) } { viewDate.getFullYear() }
                        </Text>
                    </div>
                <IconButton variant="ghost" onClick={nextMonthHandler}>
                    <ChevronRightIcon />
                </IconButton>
            </Flex>
            <Grid columns="7" gapX="3" gapY="2">
                {
                    <Days key={viewDate.toDateString()} />
                }
            </Grid>
        </div>
    
    </>

}