import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/srilakshmidevelopers' exact component={Homepage}/>
         <Route path='/problem-srilakshmidevelopers/public/index.html' exact component={SecondPage}/>
       </Switch>
     </Router>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
