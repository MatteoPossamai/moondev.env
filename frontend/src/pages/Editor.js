import { useState } from "react";
import sun from '../images/sun.png';
import moon from '../images/moon.png';

const Editor = () => {
    const [text, setText] = useState('//Your code');
    const [bg, setBg] = useState('dark');

    const changeStyle = (e) => {
        e.preventDefault();
        if(bg==='dark'){
            setBg('light');
        }else{
            setBg('dark');
        }
    }

    const handleChanges = (e) => {
        setText(e.target.value);   
    }

    const countLine = () => {
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
        return  count;
    }

    return <>
        <form className="editor">
            <div className="opened">  index.html  </div>
            <div>
                {<ul>
                    {Array.from(Array(countLine), (e, i) => {
                    return <li key={i}>{i}</li>
                    })}</ul>}
            </div>
            <textarea name="code" value={text} className="editorText" onChange={handleChanges} spellCheck="false" 
            id = {bg}></textarea>
            <button onClick={changeStyle} className="buttonTheme"><img src={sun} alt="sun" className="obj"/><img src={moon} alt="moon" className="obj" id="moon"/>
            <div className={bg==='dark' ? "circleDark" : "circleLight"}></div></button>
        </form>
    </>
}

export default Editor;