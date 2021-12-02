import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContestG} from '../Group';
import axios from 'axios'

const AddPartecipant = (g) => {
    const v = useContext(PopupContestG);
    const [name, setName] = useState('');
    return (<>
        <div className={v.popup === 5 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>New Partecipant</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {v.setPopup(0);setName('')}}>X</button>
            </div>
            <p>Name:</p>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}}  onClick={() => {
                console.log({user:name, group_id:v.group._id})
                axios.post("http://localhost:5050/group/add-user-to-group", {user:name, group_id:v.group._id})
                v.setPopup(0);
                v.recharge();
                setName('');
            }}>Add</button>
        </div>
    </>);
}

export default AddPartecipant;