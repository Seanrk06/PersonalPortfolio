import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/"  element ={<Home/>}/>
            <Route exact path="/projects"  element ={<Projects/>}/>
            <Route exact path="/404" element={<PageNotFound/>} />
            <Route exact path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
