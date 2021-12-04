import {useEffect, useState, useContext} from 'react';
import {WContext} from './EditPage';
import axios from 'axios';

const Sidebar = () => {
    const v = useContext(WContext);
    const [file, setFile] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("isG") === "0"){
            axios.post("http://127.0.0.1:5050/file/getfilesbycreator",{creator:localStorage.getItem('user')})
                .then(res => {
                    setFile(res.data);

            })
        }else{
            axios.post("http://127.0.0.1:5050/file/getfilesbygroup",{group:localStorage.getItem('gruop')})
                .then(res => {
                    setFile(res.data);
            })
        }
    }, [])

    return <>
        <div className="sidebar">
            <h3>Files of workspace</h3>
            <div className="sidesaparator"></div>
            {
                file.map(f=>{
                    return <button key={f._id} onClick={() => v.setActiveFile(f)} style={{'padding':"10px", "marginTop": "5px"}}>
                        {f.name + "." + f.extension}</button>
                })
            }
        </div>
    </>
}

export default Sidebar;