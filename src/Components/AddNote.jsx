/*
auther = RezaShahbaziyan => ujin
github = https://github.com/rezashahbaziyan
Instagram = ujin.js
about me : front-end developer with React 
and blockchain smart contract developer 

*/

import React, { useState } from "react";
import "./AddNote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function AddNote() {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [noteList, setNoteList] = useState([]);
    const [searchText, setSearchText] = useState(""); // new state variable
    
    const handelNoteTitle = (e) => {
        setNoteTitle(e.target.value);
    };
    const handelNoteText = (e) => {
        setNoteText(e.target.value);
    };

    const ButtonClik = () => {
        setNoteList([...noteList, { title: noteTitle, text: noteText }]);
        setNoteTitle("");
        setNoteText("");
    };

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const filteredNotes = noteList.filter(
        (note) =>
            note.title.toLowerCase().includes(searchText.toLowerCase()) ||
            note.text.toLowerCase().includes(searchText.toLowerCase())
    );
    
    return (
    <div className="mother-div">
        <div className="input-div">
            <input type="text" placeholder="Title..." className="inputs" value={noteTitle} onChange={handelNoteTitle}/>
            <input type="text"placeholder="Text..."className="inputs"value={noteText}onChange={handelNoteText}/>
            <button onClick={ButtonClik}>Add Note</button>
            <input type="text"placeholder="Search..."className="inputs"value={searchText}onChange={handleSearchText}/>
        </div>
        <div className="notes-div">
            {filteredNotes.map((note, index) => (
                <div className={`Stiky-Div color-${index % 6}`} key={index}>
                    <h2>{note.title}</h2>
                    <span>{note.text}</span>
                    <FontAwesomeIcon className={"removeIcon"} icon={faTimes} onClick={() =>
                        setNoteList(noteList.filter((_, i) => i !== index))
                    }/>
            </div>
            ))}
            
        </div>
    </div>

    );
}      
