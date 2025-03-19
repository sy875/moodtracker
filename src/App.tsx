import { useEffect, useState } from "react"
import Calendar from "./components/Calendar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SetMood from "./components/SetMood"
import { generateCalendarGrid } from "./utils/calendar"
import toast from "react-hot-toast"

export type CalendarData = {
  date: number,
  emojiNumber: number
}


function App() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendarData, setCalendarData] = useState<CalendarData[]>([])

  useEffect(() => {
    if (currentDate) {
      setCalendarData(generateCalendarGrid(currentDate))
    }
  }, [currentDate])


  //function to set mood according to list of emoji based on their index
  const setUserMoodInLocalStorage = (emojiNumber: number) => {
    // console.log("emoji number is ", emojiNumber)
    const findAlreadySaved = localStorage.getItem("mtracker");

    try {

      //if record of mtracker already present just add in that to preserve previous record
      if (findAlreadySaved) {
        const parsed = JSON.parse(findAlreadySaved);
        const date = new Date().toJSON().slice(0, 10) //formatting in the format "yyyy-mm-dd"
        const newMTrackerObj = { [date]: emojiNumber }
        localStorage.setItem(`mtracker`, JSON.stringify({ ...parsed, ...newMTrackerObj }));
        setCalendarData(generateCalendarGrid(currentDate))
        toast.success("Successfully update mood for today")
      } else {

        //creating new obj
        const date = new Date().toJSON().slice(0, 10) //formatting in the format "yyyy-mm-dd"
        const newMTrackerObj = { [date]: emojiNumber }
        localStorage.setItem(`mtracker`, JSON.stringify({ ...newMTrackerObj }));
        setCalendarData(generateCalendarGrid(currentDate))
        toast.success("Successfully updated mood for today")
      }
    } catch (error) {
      // console.log("error occured while saving mood", error)
      toast.error("failed update mood for today")
    }
  }

  return (
    <>
      <main className="relative ">
        <Navbar />
        <Hero />
        <SetMood setUserMoodInLocalStorage={setUserMoodInLocalStorage} />
        <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} calendarData={calendarData} />
        {/* <Footer/> */}
      </main>
    </>
  )
}

export default App
