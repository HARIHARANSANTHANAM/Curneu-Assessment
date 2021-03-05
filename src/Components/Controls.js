import React from 'react'
import controlstyles from '../Css/Controls.module.css';

function Controls(props) {

    const{numPages,pageNumber,setPageNumber}=props;


    const islastpage=pageNumber!=numPages?"":"disabled";
    const nextpage=()=>{
        if(numPages!=pageNumber)setPageNumber(pageNumber+1);
         console.log(islastpage);
    }
    const previouspage=()=>{
        setPageNumber(pageNumber-1);
    }
    const firstpage=()=>{
       setPageNumber(1);
    }
    const lastpage=()=>{
        if(numPages!=pageNumber) setPageNumber(numPages);
    }


    const isfirstpage=pageNumber===1?"disabled":"";
    

    return (
        <div style={{display:"flex",flexWrap:"wrap",width:"100%", background:"#f50057",borderRadius:"5px",height:"50px",color:"white",alignItems:"center",justifyContent:"center"}}>
           
        <div className={controlstyles.page_controls}>
            
            <button  className={`btn-floating waves-effect waves-light pink darken-4 ${isfirstpage}`} onClick={firstpage}><i class="fa fa-fast-backward " aria-hidden="true"></i></button>
            <button className={`btn-floating waves-effect waves-light pink darken-4 ${isfirstpage}`}onClick={previouspage}><i class="fa fa-backward " aria-hidden="true"></i></button>
            <input type="number" style={{width:"40px",border:"1px solid white",height:"20px",color:"white",background:"pink",margin:"0"}} value={pageNumber}></input><h6>/ {numPages}</h6>
             <button className={`btn-floating waves-effect waves-light pink darken-4 ${islastpage}`} onClick={nextpage}  ><i class="fa fa-forward " aria-hidden="true"></i></button>
             <button className={`btn-floating waves-effect waves-light pink darken-4 ${islastpage}`} onClick={lastpage} ><i class="fa fa-fast-forward " aria-hidden="true"></i></button>
           
            </div>
           
        </div>
    )
}

export default Controls
