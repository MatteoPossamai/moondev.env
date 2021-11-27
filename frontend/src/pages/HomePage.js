import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import GList from './GList';
import SFile from './SFile';
import AddFile from './popups/AddFile';
import CreateGroup from './popups/CreateGroup';
import JoinAGroup from './popups/JoinAGoup';
import Quit from './popups/Quit';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/styleG.css';
import axios from 'axios';

const PopupContest = React.createContext();

const HomePage =  () => {
    useEffect(() => {
        axios.get("http://127.0.0.1:5050/file/getfilesbycreator", {"creator":"Matteo Possamai"})
        .then(res => console.log(res))
    
    })

    const [popup, setPopup] = useState(0);
    return (<>
    <PopupContest.Provider value={{popup, setPopup}}>
    <Header />
    <div className="wrap">
        <div className="yFiles">
         <h3 style={{'textAlign': 'left'}}>File list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {} 
             <button className="buttSendA" onClick={() => setPopup(1)}>ADD File</button>
             <Link to="/group" className="buttSendA12">Enter Your Workspace</Link>
            </div>
        </div>

        <GList />

        <div className="cFiles"></div>
        <Chat />
        <Footer />
        <AddFile obj="h"/>{/*1*/}
        <CreateGroup />{/*2*/}
        <JoinAGroup />{/*3*/}
        <Quit obj="h"/>{/*4*/}
    </div>
    </PopupContest.Provider>
    </>);
};

export default HomePage;
export {PopupContest};