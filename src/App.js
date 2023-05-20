import PortfolioPage from './component/portfolioPage';
import MainPage from './component/mainPage'
import ResumePage from './component/resumePage'
import NotFound from './component/notFound'
import { Routes, Route, Outlet } from 'react-router-dom';
import Portfolio1_homepage from './portfolio1/frontend/src/pages/jw_main'
import Main from './portfolio1/frontend/src/pages/jw_applySubscribe'
function App(props) {
  return (
    
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<MainPage mode={props}/>}/>
      <Route path='/' element={<Outlet/>}>
        <Route path='portfolio/' element={<PortfolioPage/>}/>
        <Route path='portfolio/' element={<Outlet/>}>
           <Route path='pages=1/' element={<Portfolio1_homepage/>}/>
           <Route path='pages=1/' element={<Outlet/>}>
            <Route path='main/' element={<Main/>}></Route>
           </Route>
        </Route>
        <Route path='resume/' element={<ResumePage/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
