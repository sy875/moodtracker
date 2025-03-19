import { useEffect, useState } from 'react'
import { generateCalendarGrid } from '../utils/calendar'

const useCalendarData = (currentDate: Date) => {
    const [calendarData, setCalendarData] = useState({})

    useEffect(() => {
        setCalendarData(generateCalendarGrid(currentDate))
    }, [])

    return calendarData
}

export default useCalendarData
