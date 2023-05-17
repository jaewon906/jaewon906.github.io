import PortfolioPage from './component/portfolioPage';
import MainPage from './component/mainPage'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='https://jaewon906.github.io/' element={<MainPage/>}/>
      <Route path='https://jaewon906.github.io/' element={<Outlet/>}>
        <Route path='portfolio/' element={<PortfolioPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
