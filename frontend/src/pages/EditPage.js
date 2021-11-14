//import { useState, useContext, useEffect } from 'react';
import '../styles/style.css';
import Editor from './Editor'
import Sidebar from './Sidebar'

const EditPage = () => {
    return <>
        <h1 className="edittitle">Edit Page</h1>
        <div className="edit">
            <Sidebar />
            <Editor />
        </div>
    </>
}

export default EditPage;