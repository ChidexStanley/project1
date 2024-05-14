import './App.css';
import Calculator from './Components/Calculator';
// import { Car } from './Components/Car';
import New from './Components/New';
import Time from './Components/Time';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './Components/Top bar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path='/time' element={<Time />} />
          <Route path='/new' element={<New />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
