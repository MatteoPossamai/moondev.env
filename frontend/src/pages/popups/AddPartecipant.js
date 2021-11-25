import '../../styles/stylePopup.css';
import {useState} from 'react';

const AddPartecipant = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    return (<>
        <div className={visible ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>New Partecipant</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => setVisible(false)}>X</button>
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
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}}>Add</button>
        </div>
    </>);
}

export default AddPartecipant;