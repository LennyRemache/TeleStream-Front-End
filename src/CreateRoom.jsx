import React from "react";
import NavBar from "./NavBar";
import { useState,useEffect } from 'react';
import Popup from "./PopUp";
import axios from 'axios'

export default function CreateRoom(){
    const [roomName, setRoomName] = useState('') //to retrieve new room name
    const [genre, setGenre] = useState('') //to retrieve genre of new room
    const [state, setState] = useState(false) //to determine if pop up to create a room is showing or not

    const togglePopUp = () => {
        setState(!state);
    }

    const handleCreateRoom = () =>{
        axios.post(`https://swejol.herokuapp.com/rooms/create/${roomName}/${genre}`)
            .then((res) => {
                console.log(res);
                setRoomName('');
                setGenre('');
                setState(!state);
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    return(
        <div>
            <button onClick={togglePopUp}>
                Create New Room
            </button>
            {state &&
            <Popup
                handleCloseX = {togglePopUp}
                content = { <>
                    <h3>Create Your New Room</h3>
                    <input 
                        value={roomName}
                        onChange={(event) => setRoomName(event.target.value)}
                        placeholder = 'Enter Your Room Name'></input>
                    <br/>

                    <label for="genreSelect">Genres</label>
                    <br/>
                    <select id="genreSelect" onChange={(event) => setGenre(event.target.value)}>
                        <option value="NULL">Select</option>
                        <option value="option1">Just Talking</option>
                        <option value="option2">Gaming</option>
                        <option value="option3">3</option>
                        <option value="option4">4</option>
                        <option value="option5">5</option>
                        
                    </select>
                    <br/>

                    {/*<input 
                        value={genre}
                        onChange={(event) => setGenre(event.target.value)}
                        placeholder = 'Enter the genre'></input>
                    <br/>*/}
                    
                    </>
                }
                handleCloseS = {handleCreateRoom}
            />}
        </div>
    )
}