import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContest} from '../HomePage';

const JoinAGroup = () => {
    const v = useContext(PopupContest);
    const [name, setName] = useState('');
    return (<>
        <div className={v.popup === 3 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>Join group</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    v.setPopup(0);
                    setName('');
                }}>X</button>
            </div>
            <p>Search:</p>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <div className="search">
                <button>Group</button>
                <button>Group</button>
                <button>Group</button>
                <button>Group</button>
                <button>Group</button>
            </div>
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}} onClick={() => {
                v.setPopup(0);
                setName('');
                /* other stuff to add a group*/
            }}>Add</button>
        </div>
    </>);
}

export default JoinAGroup;