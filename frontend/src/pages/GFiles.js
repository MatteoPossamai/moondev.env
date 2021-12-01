import SFile from './SFile';
import {useContext, useState, useEffect} from 'react';
import {PopupContest} from './HomePage';
import { PopupContestG } from './Group';
import {Link} from 'react-router-dom';
import axios from 'axios';

const GFiles = (ans) => {
    const g = useContext(PopupContestG);
    const v = useContext(PopupContest);
    const [file, setFile] = useState([])
    const act = ans.obj === 'h' ? v : g;
    
    useEffect(() => {
        let id = g.group._id
        axios.post("http://127.0.0.1:5050/file/getfilesbygroup",{group:id})
        .then(res => {
            setFile(res.data);
        })
        .catch(err => console.log(err))
    }, [g.group._id, g.popup])
    

    return (<>
        <div className="gFiles">
         <h3 style={{'textAlign': 'left'}}>File list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {file.map(f=>{
                return <SFile key={f._id} name={f.name} img={f.extension} ident={f._id} char="1" />
            })}  
             <button className="buttSendA" onClick={() => act.setPopup(1)}>ADD File</button>
             <Link to="/edit" className="buttSendA12">Enter Group Workspace</Link>
            </div>
        </div>
    </>)
}

export default GFiles;