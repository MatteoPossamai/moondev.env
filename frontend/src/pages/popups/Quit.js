import {useContext} from 'react';
import '../../styles/stylePopup.css';
import {PopupContest} from '../HomePage';
import axios from 'axios';

const Quit = () => {
    const v = useContext(PopupContest);
    return <>
        <div className={v.popup===4 ? "quit": "invisible"}>
            <h5>Are you sure you want to quit this group?</h5>
            <button style={{'position': 'absolute', 'bottom':'0', 'left':'0'}} onClick={() => v.setPopup(0)}>X</button>
            <button style={{'position': 'absolute', 'right':'40%', 'bottom':'0'}} onClick={() => {
                console.log({group_id:v.selectGroup}, v.selectGroup)
                axios.post("http://localhost:5050/group/remove-from-group", {user:localStorage.getItem('user'), group_id:v.selectGroup})
                v.setPopup(0);
            }}>YES</button>
        </div>
    </>
}

export default Quit;