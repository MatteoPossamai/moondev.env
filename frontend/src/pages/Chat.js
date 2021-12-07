import Message from './Message';
import '../styles/style.css';
import '../styles/styleChat.css';
import { PopupContestG } from './Group';
import {useContext, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { io } from "socket.io-client";

const Chat = () => {
    const v = useContext(PopupContestG);
    const messagesEndRef = useRef(null)
    const [msg, setMsg] = useState([]);
    const [message, setMessage] = useState('');
    const socket = io("http://localhost:5050");

    useEffect(() => {
        scrollToBottom()
      }, [msg]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if(v.group.name){
            axios.get(`http://localhost:5050/chat/getmsg/${v.group.name}`)
                .then(group => {    
                    setMsg(group.data)
                })
        }
    }, [v.group.name])
    
    useEffect(() => {
        if(localStorage.getItem('isG') === '1'){       

            socket.on("connect", () => {
                socket.emit("groupName", {id:localStorage.getItem('gruop')})
            })

            socket.on("message", messageS => {
                if(messageS.sender !== localStorage.getItem('user')){
                    setMsg([...msg, messageS])
                    scrollToBottom()
                }
            })

        }
    // eslint-disable-next-line
    }, [socket])

    const sendMSG = (e) => {
        e.preventDefault();
        if(message !== ""){
            axios.post("http://localhost:5050/chat/sendmsg", {name:v.group.name, sender:localStorage.getItem('user'), text:message})
                .then(() => {
                    setMessage('');
                    socket.emit("message", {name:v.group.name, sender:localStorage.getItem('user'), text:message})
                    setMsg([...msg, {name:v.group.name, sender:localStorage.getItem('user'), text:message}]);
                });
        }
    }

    return <div className="containerLogin1">
        <div>
            <h3>Chat Name</h3>
        </div>
        <div className="chatSpace">
            {
                msg.map((m) => {
                    return <Message key={m._id} class={m.sender === localStorage.getItem('user') ? "mgsMe" : "mgsOt"} text={m.text} sender={m.sender} />
                })
            }
            <div ref={messagesEndRef} />
        </div>
        <form className="sMSG"> 
            <input type="input" style={{'border':'2px solid black'}} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="buttSend" onClick={sendMSG} spellCheck="false">Send</button>
        </form>
    </div>
}

export default Chat;