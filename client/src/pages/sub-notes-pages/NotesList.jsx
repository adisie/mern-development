// sub notes pages
import SingleNote from "./SingleNote"
const NotesList = () => {
  return (
      <div className="flex-grow max-h-[86vh] overflow-y-auto">
          <div className="main-container-max-width py-[1%] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
              <SingleNote />
          </div>
    </div>
  )
}

export default NotesList
