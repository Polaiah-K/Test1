// import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer';

import { Header } from './Components/Header';
import { Middle } from './Components/Middle';
// import {Middle2} from './Components/Middle2';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header></Header> */}
      {/* <Footer></Footer> */}
      <Header/>
      <Middle/>
      {/* <Middle2/> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
