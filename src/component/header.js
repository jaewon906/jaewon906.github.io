import { Link } from 'react-router-dom'
import style from '../css/header.module.css'
export default function Header(){
    return(
        <div className={style.header}>
            <div className={style.headerLeft}>
                <Link to="portfolio/">link1</Link>
                <Link to="portfolio/">link2</Link>
                <Link to="portfolio/">link3</Link>
            </div>
            <div className={style.headerRight}></div>
        </div>
    )
}