import style from '../css/topBtn.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { modeRdc } from './data';
// top 버튼 클릭시 최상단으로 이동하는 기능
function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

function TopBtn() {
    
    const dispatch = useDispatch();
    const onOff = useSelector(store=>store.dataSet.mode)

    function displayModeChange(){
        dispatch(modeRdc(true))
    }

    return (
        <div className={style.btnBox}>
            <div onClick={displayModeChange} className={onOff ? `${style.whiteModeBtn}`:`${style.darkModeBtn}`}>
                <div className={style.topBtnIcon}><i className="fa-solid fa-moon"></i></div>
            </div>
            <div onClick={moveTop} className={style.topBtn}>
                <div className={style.topBtnIcon}><i className="fa-solid fa-arrow-up"></i></div>
            </div>
        </div>
    )
}

export default TopBtn;
