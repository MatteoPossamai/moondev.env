import sun from '../images/sun.png';
import moon from '../images/moon.png';
import {useState, useContext} from 'react';
import {WContext} from './EditPage';

const Editor = () => {
    const v = useContext(WContext);
    const [text, setText] = useState('//Your code');
    const [bg, setBg] = useState('dark');
    const [line, setLine] = useState(1);

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
        setLine(countLine); 
    }

    const countLine = () => {
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
        console.log(count);
        return  count;
    }

    return <>
        <form className="editor">
            <div className="opened">  {v.activeFile}  </div>
            <div>
                <div className="number"> 
                    <ul>
                        {Array.from(Array(line), (e, i) => {
                            return <li key={i} style={{'marginTop':'-.2px'}}>{i + 1}</li>
                        })}
                    </ul>
                </div>
            </div>
            
            <textarea name="code" value={text} className="editorText" onChange={handleChanges} spellCheck="false" 
            id = {bg}></textarea>
            
            <button onClick={changeStyle} className="buttonTheme"><img src={sun} alt="sun" className="obj"/><img src={moon} alt="moon" className="obj" id="moon"/>
            <div className={bg==='dark' ? "circleDark" : "circleLight"}></div></button>
        </form>
    </>
}

export default Editor;