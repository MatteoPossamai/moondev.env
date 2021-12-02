import Message from './Message';
import '../styles/style.css';
import '../styles/styleChat.css';
import { PopupContestG } from './Group';
import {useContext, useState, useEffect} from 'react';
import axios from 'axios';

const Chat = () => {
    const v = useContext(PopupContestG);
    const [msg, setMsg] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(v.group.name){
            axios.get(`http://localhost:5050/chat/getmsg/${v.group.name}`)
                .then(group => {
                    setMsg(group.data)
                })
        }
    }, [v.group.name, message])

    const sendMSG = (e) => {
        e.preventDefault();
        if(message !== ""){
            axios.post("http://localhost:5050/chat/sendmsg", {name:v.group.name, sender:localStorage.getItem('user'), text:message})
                .then(() => setMessage(''));
        }
    }

    return <div className="containerLogin1">
        <div>
            <h3>Chat Name</h3>
        </div>
        <div className="chatSpace">
            {
                msg.map((m) => {
                    return <Message key={m._id} class={m.sender === localStorage.getItem('user') ? "mgsMe" : "mgsOt"} text={m.text} />
                })
            }
        </div>
        <form className="sMSG"> 
            <input type="input" style={{'border':'2px solid black'}} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="buttSend" onClick={sendMSG} spellCheck="false">Send</button>
        </form>
    </div>
}

export default Chat;