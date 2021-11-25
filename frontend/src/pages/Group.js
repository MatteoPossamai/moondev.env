import Chat from './Chat';
import GFiles from './GFiles';
import Partecipants from './Partecipants';
import AddPartecipant  from './popups/AddPartecipant';
import AddFile from './popups/AddFile';
import { Link } from 'react-router-dom';
import '../styles/styleG.css';
import home from '../images/home.png';
import React, {useState} from 'react';

const PopupContestG = React.createContext();

const Group = () => {
    const [popup, setPopup] = useState(0);
    return (<>
        <PopupContestG.Provider value={{popup,setPopup}}>
        <div className="groupP">
            <Link to="/" ><img src={home} alt="home" style={{'height': '60px', 'width': '60px'}}/></Link>
            <h1>Group Name</h1>
            <div className="group">
                <Partecipants />
                <GFiles />
                <Chat />
                <AddPartecipant />
                <AddFile obj="g" />
            </div>
        </div>
        </PopupContestG.Provider>
        </>);
}

export default Group;
export {PopupContestG};