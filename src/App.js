
import './App.css';
import Banner from './component/Banner';
import Movies from './component/Movies';
import NavBar from './component/NavBar';
import Watchlist from './component/Watchlist';
import{BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
          <>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/'
            element={
              <>
      <Banner/>
      <Movies/>
      

              </>
            }/>
            <Route path='/WatchList'
            element={< Watchlist/>}/>
          </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;

