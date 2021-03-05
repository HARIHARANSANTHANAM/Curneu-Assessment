import React,{useState} from 'react'
import {Document,Page,pdfjs} from 'react-pdf';
import Controls from './Controls';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Pdfreader() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const[filePath,setfilePath]=useState("");
  const[browse,setBrowse]=useState("");

  const handlefilePath=(e)=>{
    console.log(e.target.value);
    setfilePath(e.target.value);
  }

  const handleSubmit=(e)=>{
    setBrowse(filePath);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
           <input type="text" style={{color:"white"}}  onChange={handlefilePath}></input>
           <button className="btn btn-small" onClick={handleSubmit}>Browse</button>
           </div>
            <br></br>
            <Controls/>
            <Document
            file={browse}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                    <Page pageNumber={pageNumber} />
            </Document>

        </div>
    )
}

export default Pdfreader

