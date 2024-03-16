import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const SingleNote = () => {
  return (
    <div className="rounded-sm shadow-lg p-[1%]">
      <header className="border-b border-emerald-700 border-opacity-15 flex items-center justify-end px-3">
        <span className="text-xs italic text-emerald-800">date</span>
      </header>
      <div className="my-[1%] text-sm text-gray-700">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          nostrum tenetur error maxime aliquid exercitationem ipsam repellendus
          neque! Ipsum, alias? Neque nisi culpa.
        </p>
      </div>
      <footer className="border-t border-emerald-700 border-opacity-15 flex items-center justify-center gap-x-3 py-[1%]">
        <button className="text-gray-400 text-xl transition-all ease-in-out duration-100 hover:text-gray-700">
          <CiEdit />
        </button>
        <button className="text-gray-400 text-xl transition-all ease-in-out duration-100 hover:text-gray-700">
          <MdDelete />
        </button>
      </footer>
    </div>
  );
};

export default SingleNote;
