import './App.css';
import Navbar from './Components/Navbar';
import Pdfreader from './Components/Pdfreader';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
      <div className="container">
      <Pdfreader/>
      </div>
      </div>
    </div>
  );
}

export default App;
