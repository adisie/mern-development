import { useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
// icons
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

// actions from slices
// notes slice
import { deleteNote } from "../../features/notes/notesSlice";


const SingleNote = ({ note }) => {
  // hooks
  const dispatch = useDispatch();

  return (
    <div className="rounded-sm shadow-lg p-[1%]">
      <header className="border-b border-emerald-700 border-opacity-15 flex items-center justify-end px-3">
        <span className="text-xs italic text-emerald-800">
          {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
        </span>
      </header>
      <div className="my-[1%] text-sm text-gray-700">
        <p className="text-justify">{note.note}</p>
      </div>
      <footer className="border-t border-emerald-700 border-opacity-15 flex items-center justify-center gap-x-3 py-[1%]">
        <button className="text-gray-400 text-xl transition-all ease-in-out duration-100 hover:text-gray-700">
          <CiEdit />
        </button>
        <button
          className="text-gray-400 text-xl transition-all ease-in-out duration-100 hover:text-gray-700"
          onClick={() => {
            dispatch(deleteNote(note._id));
          }}
        >
          <MdDelete />
        </button>
      </footer>
    </div>
  );
};

export default SingleNote;
