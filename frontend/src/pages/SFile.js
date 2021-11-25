import '../styles/styleF.css';
import img from '../images/c.png';

const SFile = (n) => {
    return <> 
        <button className="fileSingle">
            <img src={img} alt="img" style={{'height':'50px', 'width':'50px','position':'relative', 'top':'0', 'left':'0'}} />
            <h3>{n.val+1+')'}File Name</h3>
        </button>
    </>
}

export default SFile;