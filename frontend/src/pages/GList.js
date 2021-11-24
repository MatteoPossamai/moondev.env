import SGroup from './SGroup';

const Glist = () => {
    return (<>
    <div className="gFiles">
            <h3 style={{'text-align': 'left'}}>Group list</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
            {Array.from(Array(8).keys()).map(n => {
                return <SGroup key={n} val={n}/>;
            })}   
        </div>
        <button className="buttSendA">Create a Group</button>
        <button className="buttSendA1">Enter a group</button>
    </div>
    </>)
}

export default Glist;