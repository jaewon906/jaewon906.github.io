import style from '../css/mainpage.module.css'
import AsideLeft from './asideLeft'
export default function MainPage() {
    return (
        <div className={style.container}>
            <AsideLeft />
            <div className={style.main}>
                hihi
            </div>
        </div>
    )
}