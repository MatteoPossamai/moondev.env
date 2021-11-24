import '../styles/styleG.css';

const Sgroup = (n) => {
    return <> 
        <div className="singleGroup">
            <h3>{n.val+1+')'}Group Name</h3>
            <div className="interaction">
                <button>Enter Group Page</button>
                <button>X</button>
            </div>
        </div>
    </>
}

export default Sgroup;