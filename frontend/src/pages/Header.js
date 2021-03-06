import '../styles/style.css';
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {PopupContest} from './HomePage';

const Header = (e) => {
    const v = useContext(PopupContest);
    const [menuS, setMenuS] = useState(false);
    const changeSM = () => {
        if(!menuS){
            setMenuS(true);
        }else{
            setMenuS(false);
        }
    }

    return <>
        <div className="header">
            <h1>moondev.env</h1>
            <button className="userButton" onClick={changeSM}>{localStorage.getItem('user') ? localStorage.getItem('user')[0] : "U"}</button>
        </div>

        <div className={ menuS ? 'menu' : 'menuS'}>
            <Link to='/about' className="menuB">About</Link>
            <Link to='/contact' className="menuB">Contact</Link>
            <Link to='/edit' className="menuB">Workspace</Link>
            <button className="menuB" onClick={() => {localStorage.clear();setMenuS(false);v.setPopup(1)}}>Logout</button>
        </div>

        <div className="subHeader">
            <Link to="/contact" className="link"><button className="shb">Contact</button></Link>
            <Link to="/edit" className="link"><button className="shb">Your workspace</button></Link>
            <Link to="/about" className="link"><button className="shb">About</button></Link>
        </div>
    </>
}

export default Header;