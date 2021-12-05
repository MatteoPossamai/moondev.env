import sun from '../images/sun.png';
import moon from '../images/moon.png';
import {useState, useEffect, useContext} from 'react';
import {WContext} from './EditPage';
import axios from 'axios';
import { io } from "socket.io-client";
import { useNavigate   } from 'react-router-dom';
import home from '../images/home.png';
import back from '../images/back-arrow.png';

const Editor = () => {
    const v = useContext(WContext);
    const [text, setText] = useState('');
    const [bg, setBg] = useState('dark');
    const socket = io("http://localhost:5050");

    useEffect(() => {
        if(localStorage.getItem('isG') === '1'){       

            socket.on("connect", () => {
                socket.emit("groupName", {id:localStorage.getItem('gruop')})
            })

            socket.on("text-change", obj => {
                //console.log(socket.id !== obj.emitter)
                console.log(obj.text)
                if(socket.id !== obj.emitter){
                    setText(obj.text);
                }
            })

        }
    }, [socket])

    const handleChanges = (e) => {
        setText(e.target.value)
        socket.emit("text-change", e.target.value)
        if(v.activeFile){
            axios.put('http://localhost:5050/file/modifyfilecontent', {id:v.activeFile._id, code: e.target.value}) 
        }
    }

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

    const history = useNavigate ();

    const homeG = () => {
        socket.disconnect();
        socket.close();
        history("/");
    }

    const backG = () => {
        socket.disconnect();
        socket.close();
        history(`/group/${localStorage.getItem('gruop')}`);
    }

    //console.log(text)
    return <>
        <button onClick={homeG} style={{'height': '60px', 'width': '60px', "position":"absolute", "top":"10px", "left":"10px"}}><img src={home} style={{'height': '60px', 'width': '60px', "position":"absolute", "top":"0px", "left":"0px"}} alt="home"/></button>
        <button onClick={backG} style={{'height': '60px', 'width': '60px', "position":"absolute", "top":"10px", "left":"80px"}}><img src={back} style={{'height': '60px', 'width': '60px', "position":"absolute", "top":"0px", "left":"0px"}} alt="home" /></button>
        <form className="editor">
            <div className="opened">  {v.activeFile.name ? v.activeFile.name + "." + v.activeFile.extension : ""}  </div>
            
            <textarea name="code" value={text} className="editorText" onChange={handleChanges} spellCheck="false" 
            id = {bg}></textarea>
            
            <button onClick={changeStyle} className="buttonTheme"><img src={sun} alt="sun" className="obj"/><img src={moon} alt="moon" className="obj" id="moon"/>
            <div className={bg==='dark' ? "circleDark" : "circleLight"}></div></button>
        </form>
    </>
}

export default Editor;