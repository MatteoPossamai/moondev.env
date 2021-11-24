import Chat from './Chat';
import GFiles from './GFiles';
import Partecipants from './Partecipants';
import { Link } from 'react-router-dom';
import '../styles/styleG.css';
import home from '../images/home.png';

const Group = () => {
    return (<>
        <div className="groupP">
        <Link to="/" ><img src={home} alt="home" style={{'height': '60px', 'width': '60px'}}/></Link>
        <h1>Group Name</h1>
        <div className="group">
            <Partecipants />
            <GFiles />
            <Chat />
        </div>
        </div>
        </>);
}

export default Group;