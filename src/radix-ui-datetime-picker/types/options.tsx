export interface DateTimeRange {
    from : Date;
    to : Date;
}

export interface TimeOptions {
    from? : number;
    to? : number;

    /**
     * Number in milliseconds.
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