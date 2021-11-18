import '../styles/style.css';
import React, {useState} from 'react';

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
            <button className="menuB">Workspace</button>
            <button className="menuB">Chat</button>
            <button className="menuB">Logout</button>
        </div>
        <div className="subHeader">
            <button className="shb">Settings</button>
            <button className="shb">Chat</button>
            <button className="shb">About</button>
        </div>
    </>
}

export default Header;