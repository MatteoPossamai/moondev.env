import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import GList from './GList';
import SFile from './SFile';

const HomePage =  () => {
    return (<>
    <Header />
    <div className="wrap">
        <div className="yFiles">
         <h3 style={{'text-align': 'left'}}>File list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {Array.from(Array(8).keys()).map(n => {
                return <SFile key={n} val={n}/>;
            })} 
             <button className="buttSendA">ADD File</button>
             <button className="buttSendA1">Enter Group Workspace</button>
            </div>
        </div>

        <GList />

        <div className="cFiles"></div>
        <Chat />
        <Footer />
    </div>
    </>);
};

export default HomePage;