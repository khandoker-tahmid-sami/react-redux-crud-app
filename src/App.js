import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Update from './pages/update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/react-redux-crud-app' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
