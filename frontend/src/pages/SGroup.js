import '../styles/styleG.css';
import { Link } from 'react-router-dom'; 
import {useContext} from 'react';
import {PopupContest} from './HomePage';


const Sgroup = (n) => {
    const v = useContext(PopupContest);
    let link = `/group/${n.name}`;
    return <> 
        <div className="singleGroup">
            <h3>{n.val}</h3>
            <div className="interaction">
                <Link to ={link} className="goto" params={{ group: n.name }}>Enter Group Page</Link>
                <button onClick={() => {v.setPopup(4); v.setSelectGroup(n.name);}}>X</button>
            </div>
        </div>
    </>
}

export default Sgroup;