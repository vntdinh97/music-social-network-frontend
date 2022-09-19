import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import { Player } from './components/Player/Player';

function App() {
  return (
    <BrowserRouter>

      <div className='container'>
        <Header></Header>
        <div className='content'>
          <LeftMenu />
          <Routes>
            <Route path="/" element={<div>this is home page</div>} />
            <Route path="/trending" element={<div>this is trending page</div>} />
            <Route path="/playlist" element={<div>this is playlist page</div>} />
          </Routes>
        </div>
        <Player/>
      </div>
    </BrowserRouter>

  );
}

export default App;
