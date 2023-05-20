import style from '../css/resumePage.module.css'
import AsideLeft from './asideLeft'
export default function ResumePage(){
    return(
        <div className={style.container}>
            <AsideLeft/>
            <div className={style.main}>
                
            </div>
        </div>
    )
}