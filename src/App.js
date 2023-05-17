import PortfolioPage from './component/portfolioPage';
import MainPage from './component/mainPage'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/' element={<Outlet/>}>
        <Route path='portfolio/' element={<PortfolioPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
