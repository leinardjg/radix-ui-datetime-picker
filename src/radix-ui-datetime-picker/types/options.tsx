import { HHMM12, HHMM24 } from "../utils/TimeUtils";

export interface DateTimeRange {
    from : Date;
    to : Date;
}

export interface TimeOptions {
    from? : HHMM12;
    to? : HHMM12;

    /**
     * Number in minutes.
     */
    interval? : number;
}

export interface DateTimePickerOptions {
    timeOptions? : TimeOptions;
    monday? : TimeOptions;
    tuesday? : TimeOptions;
    wednesday? : TimeOptions;
    thursday? : TimeOptions;
    friday? : TimeOptions;
    saturday? : TimeOptions;
    sunday? : TimeOptions;
}