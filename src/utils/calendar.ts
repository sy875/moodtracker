import { CalendarData } from "../App";

// Get days in month
export const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

// Get first day of month (0 = Sunday, 1 = Monday, etc.)
export const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};


export type parsedEmojiListType = {
    [key: string]: number
}

// Generate calendar grid
export const generateCalendarGrid = (currentDate: Date): CalendarData[] | [] => {

    try {
        const findAlreadySaved = localStorage.getItem("mtracker");
        const parsedEmojiList: parsedEmojiListType = findAlreadySaved && JSON.parse(findAlreadySaved);

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const days = new Array();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null);
        }

        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const monthformat = month > 10 ? `${month + 1}` : `0${month + 1}`
            const dayformat = i > 10 ? `${i}` : `0${i}`
            console.log(`${year}-${monthformat}-${dayformat}`)
            days.push({ date: i, emojiNumber: parsedEmojiList && parsedEmojiList[`${year}-${monthformat}-${dayformat}`] });
        }

        return days;
    } catch (error) {
        return []
    }


};
