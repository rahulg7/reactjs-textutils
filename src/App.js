import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "rahul";
function App() {
  return (
    <>
    <Navbar aboutText="About Us"/>
    <div className="container"><TextForm heading="Enter your text here!!"/></div>
    </>
    
  );
}

export default App;
