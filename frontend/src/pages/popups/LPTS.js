import {LoginContest} from '../Login';
import {useContext} from 'react';
import '../../styles/stylePopup.css';
 
const LPTS = () => {
    const act = useContext(LoginContest);
    return (
        <div className={act.popup === 4 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Password too short</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    act.setPopup(0);
                }}>X</button>
            </div>
            <p>Your passwords is too short. It must be at least 7 char</p>
        </div>
    )
}

export default LPTS;