import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
        <Route path='/' element={<HomePage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
