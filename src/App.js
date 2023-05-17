import './App.css';
import Main from './pages/Main';
import Vigym from './pages/Vigym';
import Pragto from './pages/Pragto';
import BuccaneerBarrage from './pages/BuccaneerBarrage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/vigym' element={<Vigym />} />
      <Route path='/pragto' element={<Pragto />} />
      <Route path='/buccaneerbarrage' element={<BuccaneerBarrage />} />
      </Routes>
    </div>
  );
}

export default App;