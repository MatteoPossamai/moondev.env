import SGroup from './SGroup';
import {useContext, useEffect, useState} from 'react';
import {PopupContest} from './HomePage';
import axios from 'axios';

const Glist = () => {
    let [groups, setGroups] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5050/group/getgroupfromuser", "Matteo Possamai")
        .then(g => {setGroups(g.data); console.log(g.data)})
        .catch(err => console.log(err))
        
    },[])

    const v = useContext(PopupContest);
    return (<>
    <div className="gFiles">
            <h3 style={{'textAlign': 'left'}}>Group list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {groups.map((group) => {
                return <SGroup key={group.id} val={group.name} />
            })}   
        </div>
        <button className="buttSendA" onClick={() => {v.setPopup(2)}}>Create a Group</button>
        <button className="buttSendA1" onClick={() => {v.setPopup(3)}}>Join a group</button>
    </div>
    </>)
}

export default Glist;