import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContest} from '../HomePage';
import {PopupContestG} from '../Group';
import axios from 'axios';

const AddFile = (ans) => {
    const g = useContext(PopupContestG);
    const v = useContext(PopupContest);
    const [name, setName] = useState('');
    const [extension, setExtension] = useState("HTML");
    const act = ans.obj === 'h' ? v : g;
    return (<>
        <div className={act.popup === 1 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>New File</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    act.setPopup(0);
                    setName('');
                }}>X</button>
            </div>
            <p>Name:</p>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <p>Extension:</p>
            <select id="sel" value={extension} onChange={e => setExtension(e.target.value)}>
                <option>HTML</option>
                <option>CSS</option>
                <option>js</option>
                <option>php</option>
                <option>java</option>
                <option>py</option>
                <option>go</option>
                <option>c</option>
            </select>
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}} onClick={() => {
                axios.post('http://localhost:5050/file/createnewfile', {name, extension, creator:localStorage.getItem('user')})
                act.setPopup(0);
                setName('');
            }}>Create</button>
        </div>
    </>);
}

export default AddFile;