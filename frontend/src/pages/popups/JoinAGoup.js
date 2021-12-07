import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContest} from '../HomePage';
import axios from 'axios';

const JoinAGroup = () => {
    const v = useContext(PopupContest);
    const [name, setName] = useState('');
    const join = () => {
        axios.post("http://localhost:5050/group/add-user-to-group", {user:localStorage.getItem('user'), group_name:name})
            .then(() => v.setPopup(0))
    }

    return (<>
        <div className={v.popup === 3 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Join group</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    v.setPopup(0);
                    setName('');
                }}>X</button>
            </div>
            <div style={{"display":"flex", "flexDirection":"column"}}>
            <p>Search:</p>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} plaheholder="Insert group name"/>
                <button onClick={() => {
                    join();
                }}>Enter</button>
            </div>
        </div>
    </>);
}

export default JoinAGroup;