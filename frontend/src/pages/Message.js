import '../styles/styleChat.css';

const Message = (ans) => {
     return <>
        {/*msgMe if me, msgOt is someone else*/}
        <p className={ans.class}>{ans.text}</p>
     </>
}

export default Message;