import PortfolioPage from './component/portfolioPage';
import MainPage from './component/mainPage'
import ResumePage from './component/resumePage'
import NotFound from './component/notFound'
import { Routes, Route, Outlet } from 'react-router-dom';
function App(props) {
  return (
    
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<MainPage mode={props}/>}/>
      <Route path='/' element={<Outlet/>}>
        <Route path='portfolio/' element={<PortfolioPage/>}/>
        <Route path='resume/' element={<ResumePage/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
