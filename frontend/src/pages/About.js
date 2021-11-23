import Footer from './Footer';
import '../styles/styleAbout.css';

const About = () => {
    return (<>
        <div className="about">
           <h1>moondev.env - About</h1>
            
            <p>moondev.env is a free, online, open source, collaborative development enviroment. Here, you can register your account, and log
            in from every computer in the internet. <br /><br /><br /> You will be part of a group, or a lonely develper. You will have a free group chat, for
            chat with your coworkers, and interact with them. You will obviusly have a feature-rich code editor, that will change in real time
            for all the users connected to that specific file, so pair programming become possible even from remote, and with low-latency
            technology.<br /><br /><br /> Each group will have a file dashboard, so everyone can see the same file and workspace, making a sort of git, but real-time,
            and with no needing to use command, because it will be done automatically. <br /><br /><br /> So, do you want a collaborative code enviromenmt
            that you can share with your friends, that is free, powefull and straight forward? Do you also want to make yuor project arrive to the moon? You
            are in the right place. <br /><br /><br /> <b>Welcome to moondev.env</b></p>
        </div>
        <Footer />
           </>);
}

export default About;
