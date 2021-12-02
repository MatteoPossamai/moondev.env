import '../styles/styleG.css';

const Partecipants = (n) => {
    const res = n.group.partecipants ? n.group.partecipants : []; 
    
    return (<>
    <div className="yFiles">
            <h3>Partecipants</h3>
            <div className="sidesaparator"></div>
            <div className="fileContainer">
                {
                    res.map(p => {
                        return <p key={p} style={{"padding":"5px", "border":"1px solid black", "width": "50%", "margin":"auto", "marginTop":"5px"}}>{p}</p>
                    })
                }
            </div>
    </div>
    </>)
}

export default Partecipants;