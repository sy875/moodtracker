import { emojiList } from "../constants/emojiList"

interface SetMoodProps {
  setUserMoodInLocalStorage: (key: number) => void
}

const SetMood: React.FC<SetMoodProps> = ({ setUserMoodInLocalStorage }) => {

  return (
    <div>
      <h2 className="text-center my-4">Click on any emoji to update mood</h2>
      <div className=" w-full md:w-1/2 mx-auto overflow-hidden flex gap-6 flex-wrap justify-center p-5 my-5 shadow-md rounded-md">

        {
          Object.keys(emojiList).map((key: any) => (
            <div
              onClick={() => setUserMoodInLocalStorage(key)}
              className="cursor-pointer text-xl hover:scale-200 border border-gray-50 rounded-full px-1 bg-sky-100 hover:bg-sky-300">
              {
                emojiList[key].emoji
              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default SetMood
