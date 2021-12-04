import sun from '../images/sun.png';
import moon from '../images/moon.png';
import {useState, useEffect, useContext} from 'react';
import {WContext} from './EditPage';
import axios from 'axios';

const Editor = () => {
    const v = useContext(WContext);
    const [text, setText] = useState('//Your code');
    const [bg, setBg] = useState('dark');
    const [line, setLine] = useState(1);

    useEffect(() => {
        if(v.activeFile)
            axios.get(`http://localhost:5050/file/fileText/${v.activeFile._id}`)
                .then(res => setText(res.data))
    }, [v.activeFile._id, v.activeFile])

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
        if(v.activeFile){
            axios.put('http://localhost:5050/file/modifyfilecontent', {id:v.activeFile._id, code: e.target.value})
            .then(() => setLine(countLine)) 
        }
    }

    const countLine = () => {
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
        return  count;
    }

    return <>
        <form className="editor">
            <div className="opened">  {v.activeFile.name ? v.activeFile.name + "." + v.activeFile.extension : ""}  </div>
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