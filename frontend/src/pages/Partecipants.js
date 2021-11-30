import '../styles/styleG.css';
import {useContext} from 'react';
import {PopupContestG} from './Group';

const Partecipants = (n) => {
    const v = useContext(PopupContestG);
    const res = n.group.partecipants ? n.group.partecipants : []; 
    console.log(res)
    return (<>
    <div className="yFiles">
            <h3>Partecipants</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
                {
                    res.map(p => {
                        return <p key={p} style={{"padding":"5px", "border":"1px solid black", "width": "50%", "margin":"auto", "marginTop":"5px"}}>{p}</p>
                    })
                }
            </div>
        <button className="buttSendA" onClick={() => {v.setPopup(5)}}>ADD Partecipants</button>
    </div>
    </>)
}

export default Partecipants;