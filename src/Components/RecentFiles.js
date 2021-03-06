import React,{useState,useEffect} from 'react';
import recent from '../Css/Sidepanel.module.css'
import M from 'materialize-css';

function RecentFiles(props) {
    const {recentfiles,setFilePath}=props;

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
         M.Collapsible.init(elems);
      //   console.log(recentfiles);
         

         localStorage.setItem("Recent_Used",JSON.stringify(recentfiles));
         

    })

    const handlefile=(file)=>{
        console.log(file)
        setFilePath(file);
     
    }

    return (
        <div>
            
    <ul class="collapsible" style={{border:"none"}}>
    <li>
      <div class="collapsible-header" style={{ background: "#461d3c"}}><center><h6 style={{color:"white",border:"none"}}>Recently Opened Files</h6></center></div>
      {recentfiles?<div  class="collapsible-body" style={{border:"none"}}><span> {recentfiles.slice(0,4).map(files=>{
                    return (<h6 style={{color:"white"}} className={recent.file_name} onClick={()=>handlefile(files)}>{files.name}</h6>)
                  })}</span></div>:<></>}
    
    </li>
    </ul>
        </div>
    )
}

export default RecentFiles
