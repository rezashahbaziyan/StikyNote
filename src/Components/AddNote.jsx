import React , { useState } from "react";
import "./AddNote.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function AddNote(){
    const [noteTitle , setNoteTitle] = useState('');
    const [noteText , setNoteText] = useState('');
    const [noteList, setNoteList] = useState([]);

    const handelNoteTitle = (e) =>{
        setNoteTitle(e.target.value);
    }
    const handelNoteText = (e) =>{
        setNoteText(e.target.value);
    }
    const ButtonClik = () => {
        setNoteList([...noteList,{title: noteTitle , text: noteText}])
        setNoteTitle('');
        setNoteText('');
    };

    return <div className="mother-div">
        <div className="input-div"> 
        <input type="text" placeholder="Title..." className= "inputs" value={noteTitle} onChange={handelNoteTitle}/>
        <input type="text" placeholder="Text..." className= "inputs" value={noteText} onChange={handelNoteText}/>
        <button onClick={ButtonClik}>Add Note</button>
        </div>
        <div className="notes-div">
        {
        noteList.map((note , index) => (
            <div className={`Stiky-Div color-${index % 6}`} key={index}>
                <h2>{note.title}</h2>
                <span>{note.text}</span>
                <FontAwesomeIcon className={"removeIcon"} icon={faTimes} onClick={() => setNoteList(noteList.filter((_, i) => i !== index))} />
            </div>
        ))}
        </div>
    </div>
}  

