import {LoginContest} from '../Login';
import {useContext} from 'react';
import '../../styles/stylePopup.css';
 
const LPM = () => {
    const act = useContext(LoginContest);
    return (
        <div className={act.popup === 3 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Password mismatching</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    act.setPopup(0);
                }}>X</button>
            </div>
            <p>Your two passwords are different. They must be the same </p>
        </div>
    )
}

export default LPM;