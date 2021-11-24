import SFile from './SFile';

const GFiles = () => {
    return (<>
        <div className="gFiles">
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
    </>)
}

export default GFiles;