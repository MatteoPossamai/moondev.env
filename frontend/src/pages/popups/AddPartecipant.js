import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContestG} from '../Group';

const AddPartecipant = () => {
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
            <div className="search">
                <button>Partecipant</button>
                <button>Partecipant</button>
                <button>Partecipant</button>
                <button>Partecipant</button>
                <button>Partecipant</button>
            </div>
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}}  onClick={() => {
                v.setPopup(0);
                setName('');
                /*add other logic*/
            }}>Add</button>
        </div>
    </>);
}

export default AddPartecipant;