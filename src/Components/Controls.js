import React from 'react'
import controlstyles from '../Css/Controls.module.css';

function Controls(props) {

    const { numPages, pageNumber, setPageNumber, fileName, setRotatedoc, rotatedoc } = props;


    const isfirstpage = pageNumber <= 1 ? "disabled" : "";
    const islastpage = pageNumber != numPages ? "" : "disabled";


    const nextpage = () => {
        if (numPages != pageNumber) setPageNumber(pageNumber + 1);
        console.log(islastpage);
    }
    const previouspage = () => {
        setPageNumber(pageNumber - 1);
    }
    const firstpage = () => {
        setPageNumber(1);
    }
    const lastpage = () => {
        if (numPages != pageNumber) setPageNumber(numPages);
    }

    const handleRotate = () => {
        if (rotatedoc == 360) {
            setRotatedoc(0);
        }
        else {
            setRotatedoc(rotatedoc + 90);
        }
    }

    const handlePageno = (e) => {
        setPageNumber(Number(e.target.value));
    }


    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", background: "#461d3c", height: "65px", color: "white", alignItems: "center", justifyContent: "space-between" }} className="row">

            <h6 className={controlstyles.file_name}>{fileName}</h6>
            <div className={controlstyles.page_controls}>

                <button className={`btn-floating waves-effect waves-light pink darken-4 ${isfirstpage}`} onClick={firstpage}><i class="fa fa-angle-double-left " aria-hidden="true"></i></button>
                <button className={`btn-floating waves-effect waves-light pink darken-4 ${isfirstpage}`} onClick={previouspage}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                <input type="number" style={{ width: "30px", height: "24px", color: "white", background: "#331427", margin: "0", border: "none" }} value={pageNumber} onChange={handlePageno}></input><h6>/ {numPages}</h6>
                <button className={`btn-floating waves-effect waves-light pink darken-4 ${islastpage}`} onClick={nextpage}  ><i class="fa fa-angle-right " aria-hidden="true"></i></button>
                <button className={`btn-floating waves-effect waves-light pink darken-4 ${islastpage}`} onClick={lastpage} ><i class="fa fa-angle-double-right " aria-hidden="true"></i></button>

            </div>

            <div className={controlstyles.tools}>
                <button className={`btn waves-effect waves-light pink darken-4 `} onClick={handleRotate}  ><i class="fa fa-repeat" aria-hidden="true"></i> Rotate Doc</button>
            </div>

        </div>
    )
}

export default Controls
