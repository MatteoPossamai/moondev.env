import {useContext} from 'react';
import '../../styles/stylePopup.css';
import {PopupContest} from '../HomePage';

const Delete = () => {
    const v = useContext(PopupContest);
    return <>
        <div className={v.popup===6 ? "quit": "invisible"}>
            <h5>Are you sure you want to delete this file?</h5>
            <button style={{'position': 'absolute', 'bottom':'0', 'left':'0'}} onClick={() => v.setPopup(0)}>X</button>
            <button style={{'position': 'absolute', 'right':'40%', 'bottom':'0'}} onClick={() => {
                v.setPopup(0);
                /*other stuff to quit group*/
            }}>YES</button>
        </div>
    </>
}

export default Delete;