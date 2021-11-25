import '../../styles/stylePopup.css';
import {useState, useContext} from 'react';
import {PopupContest} from '../HomePage';

const CreateGroup = () => {
    const v = useContext(PopupContest);
    const [name, setName] = useState('');
    return (<>
        <div className={v.popup === 2 ? "addfileV": "invisible"}>
            <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                <h3>New Group</h3>
                <button style={{'position': 'absolute', 'right':'0'}} onClick={() => {
                    v.setPopup(0);
                    setName('');
                }}>X</button>
            </div>
            <p>Name:</p>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button style={{'position': 'absolute', 'right':'0', 'bottom':'0'}} onClick={() => {
                v.setPopup(0);
                setName('');
                /* other stuff to add a group*/
            }
            }>Create</button>
        </div>
    </>);
}

export default CreateGroup;