import React, { useState, useContext, useEffect } from 'react';
import { useNavigate   } from 'react-router-dom';
import '../styles/style.css';
import logo from '../images/user.png';
import axios from 'axios';
import LUnable from './popups/LUnable';
import LNEExists from './popups/LNEExist';
import LPM from './popups/LPM';
import LPTS from './popups/LPTS';

const LoginContest = React.createContext();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');
    const [actMargin, setActMargin] = useState('0px');
    const [popup, setPopup] = useState(0);

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

    return <LoginContest.Provider value={{email, setEmail, password, setPassword, checkPassword, setCheckPassword, name, setName, changeHandlerS, popup, setPopup}}>
    <form className='containerLogin' onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />

        <div className="choose">
            <button id="logS" onClick={changeHandlerL}>Login</button>
            <button id="sigS" onClick={changeHandlerS}>Sign Up</button>
            <div className={actMargin==='0px' ? "lineaN"  : "lineaM" }></div>
        </div>

        {actMargin==='0px' ? <LogSub /> : <SigSub />}
    </form>
    <LUnable />
    <LNEExists />
    <LPM />
    <LPTS />
    </LoginContest.Provider>
}

const LogSub = () => {
    const l = useContext(LoginContest);
    const history = useNavigate ();

    const log = () => {
        axios.post("http://localhost:5050/user/verify-user", {email:l.email, password:l.password})
            .then(res => {
                if(res.data === "Verified"){
                    localStorage.setItem("user", l.email);
                    history('/')
                }else if(res.data === "User not registred" || res.data === 'Uncorrect password'){
                    l.setPopup(1);
                    l.setEmail('');
                    l.setPassword('')
                }
            })
    }

    return <>
        <p>Email:</p>
        <input type="text" name="email" value={l.email} onChange={(e)=> l.setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={l.password} onChange={(e)=>l.setPassword(e.target.value)}/>

        <button type="submit" id="sub" onClick={log}>Login</button>
        <p>Don't have an account?<button className="sign" onClick={l.changeHandlerS}>Sign up</button></p>
    </>
}

const SigSub = () => {
    const l = useContext(LoginContest);
    const history = useNavigate ();

    const createAndLogin = () => {
        if (l.password.length < 7){
            //password too short
            l.setPopup(4);
            l.setEmail('');
            l.setPassword('');
            l.setCheckPassword('');
            l.setName('');
            console.log('too short')
        }else if(l.password === l.checkPassword){
            axios.post("http://127.0.0.1:5050/user/create-user", {name:l.name,email:l.email, password:l.password})
            .then(res => {
                if(res.data === "200"){
                    //success
                    localStorage.setItem("user", l.email);
                    history('/')
                }else{
                    //user already exists
                    l.setPopup(2);
                    l.setEmail('');
                    l.setPassword('');
                    l.setCheckPassword('');
                    l.setName('');
                }
            })
        }else{
            //password mismatching
            l.setPopup(3);
            l.setEmail('');
            l.setPassword('');
            l.setCheckPassword('');
            l.setName('');
        }            
    }

    return <>
        <p>Name:</p>
        <input type="text" name="name" value={l.name} onChange={(e)=> l.setName(e.target.value)}/>
        <p>Email:</p>
        <input type="text" name="email" value={l.email} onChange={(e)=> l.setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={l.password} onChange={(e)=>l.setPassword(e.target.value)}/>
        <p>Retype password:</p>
        <input type="password" name="checkPassword" value={l.checkPassword} onChange={(e)=>l.setCheckPassword(e.target.value)}/>

        <button type="submit" id="sub" onClick={createAndLogin}>Sign Up</button>
    </>
}
export default Login;
export {LoginContest};