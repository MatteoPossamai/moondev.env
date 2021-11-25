import SFile from './SFile';
import {useContext} from 'react';
import {PopupContest} from './HomePage';
import { PopupContestG } from './Group';

const GFiles = (ans) => {
    const g = useContext(PopupContestG);
    const v = useContext(PopupContest);
    const act = ans.obj === 'h' ? v : g;
    return (<>
        <div className="gFiles">
         <h3 style={{'textAlign': 'left'}}>File list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {Array.from(Array(8).keys()).map(n => {
                return <SFile key={n} val={n}/>;
            })} 
             <button className="buttSendA" onClick={() => act.setPopup(1)}>ADD File</button>
             <button className="buttSendA1">Enter Group Workspace</button>
            </div>
        </div>
    </>)
}

export default GFiles;