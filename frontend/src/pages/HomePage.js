import Chat from './Chat';
import Footer from './Footer';

const HomePage =  () => {
    return (<div className="wrap">
        <div className="yFiles">
            <h3>Your files</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
                {/*all files*/}
                <p>file</p>
                <p>file</p>
                <p>file</p>
                <p>file</p>
                {/*end all files*/}
            </div>
        </div>

        <div className="gFiles">
            <h3>Group files</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
                {/*all files*/}
                <p>file</p>
                <p>file</p>
                <p>file</p>
                <p>file</p>
                {/*end all files*/}
            </div>
        </div>

        <div className="cFiles"></div>
        <Chat />
        <Footer />
    </div>);
};

export default HomePage;