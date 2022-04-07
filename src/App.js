import React from "react";
import { useState, useEffect } from "react"; // used to fetch data
import axios from "axios"; // used for fetching data from API aswel
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ChatUI from "./Links/ChatUI";
import HomeScreen from "./Links/HomeScreen";
import Directory from "./Directory"
//import LoginSignup from "./LoginSignup";
import Webcam from "./Webcam.jsx";
import {SessionProvider} from './UserSession'

export default function TeleStreamApp(){

    return(
        <SessionProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/ChatUI/:roomname' element={<ChatUI/>}/>
                    <Route path='/Directory/:genre' element={<Directory/>}/>
                </Routes>
            </Router>
        </SessionProvider>
        
    )
}
