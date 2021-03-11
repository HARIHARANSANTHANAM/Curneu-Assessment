import React, { useState, useEffect } from 'react';
import recent from '../Css/Sidepanel.module.css'
import M from 'materialize-css';

function RecentFiles(props) {
    const { recentfiles, setFilePath, setfileName } = props;

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
        localStorage.setItem("Recent_Used", JSON.stringify(recentfiles));
    })

    const handlefile = (file) => {
        console.log(file)
        setFilePath(file);
        setfileName(file.name);
    }

    return (
        <div>

            <ul class="collapsible" style={{ border: "none", background: "#461d3c" }}>
                <li>
                    <div class="collapsible-header" style={{ background: "#331427" }}><center><h6 style={{ color: "white", border: "none" }}>Recently Opened Files</h6></center></div>
                    {recentfiles ? <div class="collapsible-body" style={{ border: "none", background: "#331427" }}><span> {recentfiles.slice(0, 4).map(files => {
                        return (<h6 style={{ color: "white" }} className={`${recent.file_name} pink darken-4`} onClick={() => handlefile(files)}>{files.name}</h6>)
                    })}</span></div> : <></>}

                </li>
            </ul>
        </div>
    )
}

export default RecentFiles
