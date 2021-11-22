import React, { useState, useContext, useEffect } from 'react';
import '../styles/style.css';
import logo from '../images/user.png';

const LoginContest = React.createContext();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');
    const [actMargin, setActMargin] = useState('0px');

    useEffect(() => {
        setEmail('');
        setPassword('');
        setCheckPassword('');
        setName('');
    }, [actMargin]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const changeHandlerL = () =>{
        setActMargin('0px');
    }

    const changeHandlerS = () => {
        setActMargin('77px');
    }

    return <LoginContest.Provider value={{email, setEmail, password, setPassword, checkPassword, setCheckPassword, name, setName, changeHandlerS}}>
    <form className='containerLogin' onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />

        <div className="choose">
            <button id="logS" onClick={changeHandlerL}>Login</button>
            <button id="sigS" onClick={changeHandlerS}>Sign Up</button>
            <div className={actMargin==='0px' ? "lineaN"  : "lineaM" }></div>
        </div>

        {actMargin==='0px' ? <LogSub /> : <SigSub />}
    </form>
    </LoginContest.Provider>
}

const LogSub = () => {
    const l = useContext(LoginContest);
    return <>
        <p>Email:</p>
        <input type="text" name="email" value={l.email} onChange={(e)=> l.setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={l.password} onChange={(e)=>l.setPassword(e.target.value)}/>

        <button type="submit" id="sub" >Login</button>
        <p>Don't have an account?<button className="sign" onClick={l.changeHandlerS}>Sign up</button></p>
    </>
}

const SigSub = () => {
    const l = useContext(LoginContest);
    return <>
        <p>Name:</p>
        <input type="text" name="name" value={l.name} onChange={(e)=> l.setName(e.target.value)}/>
        <p>Email:</p>
        <input type="text" name="email" value={l.email} onChange={(e)=> l.setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={l.password} onChange={(e)=>l.setPassword(e.target.value)}/>
        <p>Retype password:</p>
        <input type="password" name="checkPassword" value={l.checkPassword} onChange={(e)=>l.setCheckPassword(e.target.value)}/>

        <button type="submit" id="sub" >Sign Up</button>
    </>
}
export default Login;