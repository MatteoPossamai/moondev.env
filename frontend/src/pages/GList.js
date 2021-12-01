import SGroup from './SGroup';
import {useContext, useEffect, useState} from 'react';
import {PopupContest} from './HomePage';
import axios from 'axios';

const Glist = () => {
    let [groups, setGroups] = useState([]);
    const v = useContext(PopupContest);
    useEffect(() => {
        axios.post("http://localhost:5050/group/getgroupfromuser", {user:localStorage.getItem('user')})
        .then(g => {setGroups(g.data); console.log(g.data)})
        .catch(err => console.log(err))
    },[v.popup])

    return (<>
    <div className="gFiles">
            <h3 style={{'textAlign': 'left'}}>Group list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {groups.map((group) => {
                return <SGroup key={group._id} val={group.name} name={group._id} />
            })}   
        </div>
        <button className="buttSendA" onClick={() => {v.setPopup(2)}}>Create a Group</button>
        <button className="buttSendA1" onClick={() => {v.setPopup(3)}}>Join a group</button>
    </div>
    </>)
}

export default Glist;