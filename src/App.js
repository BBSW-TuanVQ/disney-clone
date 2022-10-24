import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Watch from './components/Watch/Watch';
import WatchList from './components/WatchList/WatchList';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/watch/:id' element={<Watch />} />
        <Route path='/watch-list' element={<WatchList />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
