import {LoginContest} from '../Login';
import {useContext} from 'react';
import '../../styles/stylePopup.css';
 
const LUnable = () => {
    const act = useContext(LoginContest);
    return (
        <div className={act.popup === 1 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Unable to Login</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    act.setPopup(0);
                }}>X</button>
            </div>
            <p>Email is unexisting, or the password is incorrect</p>
        </div>
    )
}

export default LUnable;