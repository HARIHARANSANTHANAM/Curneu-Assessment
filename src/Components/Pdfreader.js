import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import Controls from './Controls';
import RecentFiles from './RecentFiles';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Pdfreader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [Filepath, setFilePath] = useState();
  const [fileName, setfileName] = useState();
  const [rotatedoc, setRotatedoc] = useState(0);
  const [recentfiles, setRecentFiles] = useState([]);
 
  useEffect(() => {
    setPageNumber(1);
  }, [Filepath])


  const onDocumentLoadSuccess=({ numPages })=> {
    setNumPages(numPages);
  }


  const handlesubmitfile = (e) => {
    const files = e.target.files[0];
    console.log(e.target.files[0]);
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setFilePath(files);
    })
    if (files) {
      reader.readAsDataURL(files);
      setfileName(files.name);
      setRecentFiles(oldfiles => [...oldfiles, files]);
      console.log(recentfiles);
    }

  }
  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  
  return (
    <>

      {/* only if the file choosen the controls will be displayed */}
      { Filepath ?
        <Controls numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          fileName={fileName}
          setRotatedoc={setRotatedoc}
          rotatedoc={rotatedoc}
        /> : <></>}
      <br></br>


      {/* main page */}
      <div className="row">
        
            {/* recently opened files */}
        <div className="col s12 m3"
          style={{ background: "#461d3c", boxShadow: "20px 20px 60px #371228,-20px -20px 60px #4b1836" }}>
          <RecentFiles 
          setFilePath={setFilePath} 
          recentfiles={recentfiles.reverse()} 
          setfileName={setfileName} />
        </div>


       {/* to choose the file to be viewed */}
        <div className="col s12 m9">
          <br></br>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", width: "100%" }}>
            <button className="btn pink darken-4 waves-effect waves-light" onClick={handleClick}><i className="fa fa-file-pdf-o"></i> Choose File</button>
            <input type="file" onChange={handlesubmitfile} accept="application/pdf" style={{ width: "30%", color: "white" }} ref={hiddenFileInput}
              style={{ display: 'none' }}></input>
          </div>

          <br></br>

       {/* document is displayed  */}
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", position: "relative", overflow: "hidden" }}>
            <Document
              file={Filepath}
              onLoadSuccess={onDocumentLoadSuccess}
              style={{ positon: "absolute", width: "fit-content", height: "fit-content" }}
              rotate={rotatedoc}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pdfreader

