import '../styles/styleF.css';
import {PopupContest} from './HomePage';
import { useContext } from 'react';
import c from '../images/c.png';
import css from '../images/css.png';
import go from '../images/go.png';
import html from '../images/html.png';
import java from '../images/java.png';
import js from '../images/js.png';
import php from '../images/php.png';
import py from '../images/py.png';

const SFile = (n) => {
    const v = useContext(PopupContest);
    let currentImg = c;
    switch(n.img){
        case "CSS":
            currentImg = css;
            break;
        case "go":
            currentImg = go;
            break;
        case "HTML":
            currentImg = html;
            break;
        case "java":
            currentImg = java;
            break;
        case "js":
            currentImg = js;
            break;
        case "php":
            currentImg = php;
            break;
        case "py":
            currentImg = py;
            break;
        default:
            currentImg = c;
            break;
    }
    return <> 
        <div className="fileSingle">
            <img src={currentImg} alt="img" style={{'height':'50px', 'width':'50px','position':'relative', 'top':'5', 'left':'0'}} />
            <h3>{n.name}</h3>
            <button style={{'height':'50%', 'marginTop':'10px'}} onClick={() => {v.setPopup(6); v.setSelectFile(n.ident + "")}}>X</button>
        </div>
    </>
}

export default SFile;