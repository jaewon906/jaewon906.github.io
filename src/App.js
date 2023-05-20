import PortfolioPage from './component/portfolioPage';
import MainPage from './component/mainPage'
import ResumePage from './component/resumePage'
import NotFound from './component/notFound'
import { Routes, Route} from 'react-router-dom';
import Portfolio1Homepage from './portfolio1/frontend/src/pages/jw_main'
import Main from './portfolio1/frontend/src/pages/jw_applySubscribe'
function App(props) {
  return (
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainPage mode={props} />} />
        <Route path='/portfolio/' element={<PortfolioPage />} />
        <Route path='/portfolio/pages=1/' element={<Portfolio1Homepage />} />
        <Route path='/portfolio/pages=1/main/' element={<Main />}></Route>
        <Route path='resume/' element={<ResumePage />} />
      </Routes>
  );
}

export default App;
