import React from 'react'
import controlstyles from '../Css/Controls.module.css';

function Controls() {
    return (
        <div style={{display:"flex",flexWrap:"wrap",width:"100%", background:"#f50057",borderRadius:"5px",height:"50px",color:"white",alignItems:"center",justifyContent:"center"}}>
           
        <div className={controlstyles.page_controls}>
            
            <button className="btn-floating waves-effect waves-light pink darken-4"><i class="fa fa-fast-backward " aria-hidden="true"></i></button>
            <button className="btn-floating waves-effect waves-light pink darken-4"><i class="fa fa-backward " aria-hidden="true"></i></button>
            <input type="number" style={{width:"40px",border:"1px solid white",height:"20px",color:"white",background:"pink",margin:"0"}}></input><h6>/ 24</h6>
             <button className="btn-floating waves-effect waves-light pink darken-4"><i class="fa fa-forward " aria-hidden="true"></i></button>
             <button className="btn-floating waves-effect waves-light pink darken-4"><i class="fa fa-fast-forward " aria-hidden="true"></i></button>
           
            </div>
           
        </div>
    )
}

export default Controls
