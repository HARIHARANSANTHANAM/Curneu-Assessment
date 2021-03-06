import React,{useEffect} from 'react';
import M from 'materialize-css';
import navbarstyle from '../Css/Navbar.module.css';

function Navbar() {

      useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems);
      
      }, [])

    return (
        <div>
            <nav>
    <div className="nav-wrapper">
       &nbsp;&nbsp;
      <a href="#!" className="brand-logo"> PDF VIEWER</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="mobile.html" onClick={window.print}><i className="fa fa-print"></i>  Print PDF</a></li>
        <li><a href="mobile.html"><i className="fa fa-download"></i> Download</a></li>
      </ul>
    </div>
  </nav>

 

  <ul className="sidenav" id="mobile-demo">
      <center><h5 className={navbarstyle.brandname}>PDF VIEWER</h5></center>
  <li><a href="mobile.html"><i className="fa fa-print"></i> Print PDF</a></li>
        <li><a href="mobile.html"><i className="fa fa-download"></i>Download</a></li>
    
  </ul>
        </div>
    )
}

export default Navbar
