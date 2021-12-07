import '../styles/style.css';
import Editor from './Editor'
import Sidebar from './Sidebar'
import React,  {useState} from 'react';
import moon from '../images/moonBG.png';

const WContext = React.createContext();

const EditPage = () => {
    const [activeFile, setActiveFile] = useState('');

    return <>
        <WContext.Provider value={{activeFile, setActiveFile}}>
        <img src={moon} alt="moon" style={{'position':'absolute', 'top':'-120px', 'left':'150px', 'z-index': '-1'}} />
        <h1 className="edittitle">Edit Page</h1>
        <div className="edit">
            <Sidebar />
            <Editor />
        </div>
        </WContext.Provider>
    </>
}

export default EditPage;
export {WContext};