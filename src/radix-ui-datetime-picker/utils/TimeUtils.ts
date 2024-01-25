export interface HHMM24 {
    hour : number;
    minute : number;
}
 
export interface HHMM12 {
    hour : number;
    minute : number;
    period : "AM" | "PM"
}

export function secondsToMinutes(seconds : number) : number {
    return seconds / 60;
}

export function minutestoSeconds(minutes : number) : number {
    return minutes * 60;
}

export function millisecondsToMinutes(milliseconds : number) : number {
    return milliseconds / 1000 / 60;
}

export function minutesToMilliseconds(minutes : number) : number {
    return minutes * 1000 * 60;
}

export function hoursToMinutes(hours : number) : number {
    return hours * 60;
}

export function minutesToHHMM12(minutes : number) : HHMM12 {

    const period = minutes < 720 ? "AM" : "PM"
    let hour = (Math.floor(minutes / 60) % 13);
    if (period === "PM" && hour !== 12) hour += 1;
    const minute = minutes % 60;

    return {
        hour: hour,
        minute: minute,
        period: period
    }
}

export function HHMM12ToMinutes(hhmm12 : HHMM12) : number {
    const toAdd = hhmm12.period === "PM" ? hoursToMinutes(12) : 0;
    return hoursToMinutes(hhmm12.hour) + hhmm12.minute + toAdd;
}