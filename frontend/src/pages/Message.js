import '../styles/styleChat.css';

const Message = (ans) => {
     return <>
        {/*msgMe if me, msgOt is someone else*/}
        <p className={ans.class}><i>{ans.sender}</i> <b>{ans.text}</b></p>
     </>
}

export default Message;