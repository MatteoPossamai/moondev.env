import Footer from './Footer';
import Header from './Header';
import GList from './GList';
import SFile from './SFile';
import AddFile from './popups/AddFile';
import CreateGroup from './popups/CreateGroup';
import JoinAGroup from './popups/JoinAGoup';
import Quit from './popups/Quit';
import DeleteFile from './popups/DeleteFile';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/styleG.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moon from '../images/moonBG.png';

const PopupContest = React.createContext();

const HomePage =  () => {
    const [popup, setPopup] = useState(0);
    const [file, setFile] = useState([]);
    const [selectFile, setSelectFile] = useState('');
    const [selectGroup, setSelectGroup] = useState('');
    useEffect(() => {
        axios.post("http://127.0.0.1:5050/file/getfilesbycreator",{creator:localStorage.getItem('user')})
        .then(res => {
            setFile(res.data);
        })
        .catch(err => console.log(err))
    }, [popup])
    //------------
    const history = useNavigate ();
    const url = (!localStorage.getItem("user")) ? '/login': '/'
    if(url==='/login'){history(url)}

    useEffect(() => {
        let url = (!localStorage.getItem("user")) ? '/login': '/';
        if(url==='/login'){
            setPopup(1)
        }
    }, [])//this piece of code redirect to the login page
    //-------------
    return (<>
    <PopupContest.Provider value={{popup, setPopup, selectFile, setSelectFile, selectGroup, setSelectGroup}}>
    <Header />
    <div className="wrap">
        <div className="yFiles">
         <h3 style={{'textAlign': 'left'}}>File list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {file.map(f=>{
                return <SFile key={f._id} name={f.name} img={f.extension} ident={f._id} />
            })} 
             <button className="buttSendA" onClick={() => setPopup(1)}>ADD File</button>
             <Link to="/edit" className="buttSendA12">Enter Your Workspace</Link>
            </div>
        </div>

        <GList />
        <img src={moon} alt={moon} className="moon2" />
        <div className="cFiles"></div>
        <Footer />
        <AddFile obj="h"/>{/*1*/}
        <CreateGroup />{/*2*/}
        <JoinAGroup />{/*3*/}
        <Quit obj="h"/>{/*4*/}
        <DeleteFile />
    </div>
    </PopupContest.Provider>
    </>);
};

export default HomePage;
export {PopupContest};