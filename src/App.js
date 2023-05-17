import style from "./css/app.module.css"
import Header from "./component/header";
function App() {
  return (
    <div className={style.container}>
     <Header />
    </div>
  );
}

export default App;
