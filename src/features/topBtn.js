import style from '../css/topBtn.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modeRdc } from './data';
// top 버튼 클릭시 최상단으로 이동하는 기능
function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

function TopBtn() {
    
    const [btnMarginTop] = useState(document.documentElement.clientHeight - 80);
    const dispatch = useDispatch();
    
    function displayModeChange(){
        document.body.classList.toggle('dark-mode')
        document.body.classList.toggle('white-mode')
        dispatch(modeRdc(true))
    }

    return (
        <div className={style.btnBox}>
            <div onClick={displayModeChange} style={{ position: 'sticky', top: `${btnMarginTop}px` }} className={document.body.classList.value==='white-mode'?`${style.darkModeBtn}`:`${style.whiteModeBtn}`}>
                <div className={style.topBtnIcon}><i className="fa-solid fa-moon"></i></div>
            </div>
            <div onClick={moveTop} style={{ position: 'sticky', top: `${btnMarginTop}px` }} className={style.topBtn}>
                <div className={style.topBtnIcon}><i className="fa-solid fa-arrow-up"></i></div>
            </div>
        </div>
    )
}

export default TopBtn;
