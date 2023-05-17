import style from '../css/header.module.css'
export default function Header(){
    return(
        <div className={style.header}>
            <div className={style.headerLeft}></div>
            <div className={style.headerRight}></div>
        </div>
    )
}