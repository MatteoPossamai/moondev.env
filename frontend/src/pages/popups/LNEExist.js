import {LoginContest} from '../Login';
import {useContext} from 'react';
import '../../styles/stylePopup.css';
 
const LNEExists = () => {
    const act = useContext(LoginContest);
    return (
        <div className={act.popup === 2 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Name or email already exists</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    act.setPopup(0);
                }}>X</button>
            </div>
            <p>Name or email have already been taken. Try with something else</p>
        </div>
    )
}

export default LNEExists;