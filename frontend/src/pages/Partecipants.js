import '../styles/styleG.css';
import {useContext} from 'react';
import {PopupContestG} from './Group';

const Partecipants = () => {
    const v = useContext(PopupContestG);
    return (<>
    <div className="yFiles">
            <h3>Partecipants</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
                <p>partecipants</p>
                <p>partecipants</p>
                <p>partecipants</p>
                <p>partecipants</p>
        </div>
        <button className="buttSendA" onClick={() => {v.setPopup(5)}}>ADD Partecipants</button>
    </div>
    </>)
}

export default Partecipants;