import { useState } from "react";

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
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
        console.log(count)
    }
    return <>
        <form className="editor">
            <div className="opened">index.html  x</div>
            <div>{/*Pull here number of lines*/}</div>
            <textarea name="code" value={text} className="editorText" onChange={handleChanges} spellCheck="false" 
            id = {bg}></textarea>
            <button onClick={changeStyle} className="buttonTheme">Change theme</button>
        </form>
    </>
}

export default Editor;