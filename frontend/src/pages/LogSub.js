import '../styles/style.css';

const LogSub = (email, setEmail, password, setPassword) => {
    return <>
        <p>Email:</p>
        <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="sign">Forgot Password?</button>

        <button type="submit" id="sub" >Login</button>
    </>
}

export default LogSub;