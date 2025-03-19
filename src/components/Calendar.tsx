import { Dispatch, SetStateAction} from 'react';
import { emojiList } from '../constants/emojiList';
import { monthNames } from '../constants/calender';
import { CalendarData } from '../App';


interface CalendarProps {
    currentDate: Date,
    setCurrentDate: Dispatch<SetStateAction<Date>>,
    calendarData: CalendarData[]
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, setCurrentDate, calendarData }) => {

    // Handle previous month
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // Handle next month
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg  w-full md:w-1/2 mx-auto h-[70vh]  lg:h-[80vh] ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        prev
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        next
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 ">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={index} className="text-center py-2 font-medium text-gray-500 ">
                        {day}
                    </div>
                ))}

                {/* ------------------------------- map date from array of date objects -------------------- */}
                {
                    calendarData?.map((day, index) => (
                        <div
                            key={index}
                            className="text-center py-2 cursor-pointer rounded-full h-14 "
                        >
                            <div className="flex flex-col ">
                                <span> {day?.date}</span>
                                <span>{day?.emojiNumber && emojiList[day?.emojiNumber].emoji}</span>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Calendar;