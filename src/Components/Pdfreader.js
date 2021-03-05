import React,{useState} from 'react'
import {Document,Page,pdfjs} from 'react-pdf/dist/esm/entry.webpack';
import Controls from './Controls';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Pdfreader() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const[Filepath,setFilePath]=useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlesubmitfile=(e)=>{
      const files=e.target.files[0];
      console.log(e.target.files[0]);
      const reader=new FileReader();
      reader.addEventListener('load',()=>{
          setFilePath(files);
      })
      if(files)
      {
        reader.readAsDataURL(files)
      }
     
  }
    return (
        <div>
            <br></br>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap",width:"100%"}}>
           <input type="file" onChange={handlesubmitfile} accept=".pdf"  style={{width:"25%"}}></input>
           </div>
            <br></br>
            <Controls numPages={numPages}  pageNumber={pageNumber} setPageNumber={setPageNumber} /><br></br>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",position:"relative"}}>
            <Document
            file={Filepath}
            onLoadSuccess={onDocumentLoadSuccess}
            style={{positon:"absolute",width:"100%"}}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            </div>

        </div>
    )
}

export default Pdfreader

