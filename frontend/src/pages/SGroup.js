import '../styles/styleG.css';
import { Link } from 'react-router-dom'; 
import {useContext} from 'react';
import {PopupContest} from './HomePage';

const Sgroup = (n) => {
    const v = useContext(PopupContest);
    return <> 
        <div className="singleGroup">
            <h3>{n.val+1+')'+n.val}</h3>
            <div className="interaction">
                <Link to ="/group" className="goto">Enter Group Page</Link>
                <button onClick={() => {v.setPopup(4)}}>X</button>
            </div>
        </div>
    </>
}

export default Sgroup;