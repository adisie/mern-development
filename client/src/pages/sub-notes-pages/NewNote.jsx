import { useDispatch } from 'react-redux'

// actions from slices
// notes slice
import {addNewNote } from '../../features/notes/notesSlice'

import { useState } from 'react'
import { GrSend } from "react-icons/gr";
const NewNote = () => {

    // local states
    const [note, setNote] = useState('')
    
    // hooks
    const dispatch = useDispatch()

    // adjust textare height
    const adjustTextAreaHeight = e => {
        const textarea = document.getElementById('new-note-textarea')
        textarea.style.height = '28px'
        let scrollHeight = e.target.scrollHeight 
        textarea.style.height = `${scrollHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        const textarea = document.getElementById('new-note-textarea')
        if (note.trim()) {
            dispatch(addNewNote({note}))
        }
        setNote('')
        textarea.style.height = '28px'
    }
  return (
    <div className="h-[7vh] flex items-center justify-center">
          <div className="relative flex justify-center items-center">
              <div className="absolute bottom-1 flex items-center bg-gray-300 p-1 rounded-sm">
                  <textarea name="note" placeholder="note..."
                      className="bg-transparent focus:outline-none focus:ring-0 h-[28px] max-h-[350px] text-sm w-[200px] resize-none" id="new-note-textarea"
                      onKeyUp={adjustTextAreaHeight} 
                      value={note} 
                      onChange={e=>setNote(e.target.value)}
                  ></textarea>
                  <button className="self-end" onClick={submitHandler}>
                      <GrSend className="text-xl text-gray-500"/>
                  </button>
              </div>
      </div>
    </div>
  );
};

export default NewNote;
