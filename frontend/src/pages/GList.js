import SGroup from './SGroup';
import {useContext} from 'react';
import {PopupContest} from './HomePage';

const Glist = () => {
    const v = useContext(PopupContest);
    return (<>
    <div className="gFiles">
            <h3 style={{'textAlign': 'left'}}>Group list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {Array.from(Array(8).keys()).map(n => {
                return <SGroup key={n} val={n}/>;
            })}   
        </div>
        <button className="buttSendA" onClick={() => {v.setPopup(2)}}>Create a Group</button>
        <button className="buttSendA1" onClick={() => {v.setPopup(3)}}>Join a group</button>
    </div>
    </>)
}

export default Glist;