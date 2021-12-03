import '../styles/style.css';
import Editor from './Editor'
import Sidebar from './Sidebar'
import React,  {useState} from 'react';

const WContext = React.createContext();

const EditPage = () => {
    const {activeFile, setActiveFile} = useState('Empty');


    return <>
        <WContext.Provider value={{activeFile, setActiveFile}}>
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