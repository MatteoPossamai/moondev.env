import '../styles/style.css';
import '../styles/styleChat.css';

const Chat = () => {

    const sendMSG = (e) => {
        e.preventDefault();
        console.log('Sent');
    }

    return <div className="containerLogin">
        <div>
            <h3>Chat Name</h3>
        </div>
        <div className="chatSpace">
            <p className="mgsMe">Hello</p>
            <p className="mgsOt">Hi bro</p>
        </div>
        <form className="sMSG"> 
            <input type="input" style={{'border':'2px solid black'}} />
            <button className="buttSend" onClick={sendMSG} spellCheck="false">Send</button>
        </form>
    </div>
}

export default Chat;