import Chat from './Chat';
import GFiles from './GFiles';
import Partecipants from './Partecipants';
import AddPartecipant  from './popups/AddPartecipant';
import AddFile from './popups/AddFile';
import { Link } from 'react-router-dom';
import '../styles/styleG.css';
import home from '../images/home.png';
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import moon from '../images/moonBG.png';
import Footer from './Footer';
import DeleteFile from './popups/DeleteFile';

const PopupContestG = React.createContext();

const Group = () => {
    
    localStorage.setItem('isG',"1")
    const id = useLocation().pathname.split("group/").pop();
    localStorage.setItem('gruop', id);
    const [popup, setPopup] = useState(0);
    const [group, setGroup] = useState({});
    const [selectFile, setSelectFile] = useState('');

    const recharge = () => {
        if(!group || Object.keys(group).length === 0){
            axios.get(`http://localhost:5050/group/${id}`)
                .then(res => {setGroup(res.data)})
        }
    }
    
    recharge();
    return (<>
        <PopupContestG.Provider value={{popup,setPopup, recharge, group, selectFile, setSelectFile}}>
        <div className="groupP">
            <Link to="/" ><img src={home} alt="home" style={{'height': '60px', 'width': '60px'}}/></Link>
            <h1 style={{"color":"#fff"}}>{group.name}</h1>
            <div className="group">
                <Partecipants group={group} />
                <GFiles group={group} />
                <Chat />
                <AddPartecipant />
                <AddFile obj="g"/>
                <DeleteFile obj="g" />
            </div>
        </div>
        <img src={moon} alt={moon} className="moon3" />
        <Footer />
        </PopupContestG.Provider>
        </>);
}

export default Group;
export {PopupContestG};