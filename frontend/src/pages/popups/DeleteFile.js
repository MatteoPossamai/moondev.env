import {useContext} from 'react';
import '../../styles/stylePopup.css';
import {PopupContest} from '../HomePage';
import { PopupContestG } from '../Group';
import axios from 'axios';

const Delete = (ans) => {
    const v = useContext(PopupContest);
    const g = useContext(PopupContestG);
    const act = ans.obj === 'g' ? g : v;
    return <>
        <div className={act.popup===6 ? "quit": "invisible"}>
            <h5>Are you sure you want to delete this file?</h5>
            <button style={{'position': 'absolute', 'bottom':'0', 'left':'0'}} onClick={() => act.setPopup(0)}>X</button>
            <button style={{'position': 'absolute', 'right':'40%', 'bottom':'0'}} onClick={() => {
                axios.post(`http://localhost:5050/file/delete-file`, {id:act.selectFile})
                    act.setPopup(0);
            }}>YES</button>
        </div>
    </>
}

export default Delete;