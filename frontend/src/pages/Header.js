import '../styles/style.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = (e) => {
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
            <button className="userButton" onClick={changeSM}>U</button>
        </div>

        <div className={ menuS ? 'menu' : 'menuS'}>
            <button className="menuB">Settings</button>
            <Link to='/edit' className="menuB">Workspace</Link>
            <button className="menuB">Chat</button>
            <button className="menuB">Logout</button>
        </div>

        <div className="subHeader">
            <button className="shb">Settings</button>
            <Link to="/edit" className="link"><button className="shb">Workspace</button></Link>
            <button className="shb">About</button>
        </div>
    </>
}

export default Header;