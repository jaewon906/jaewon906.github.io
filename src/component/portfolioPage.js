import { Link } from 'react-router-dom'
import style from '../css/portfolio.module.css'
import AsideLeft from './asideLeft'
export default function PortfolioPage() {
    return (
        <div className={style.container}>
            <AsideLeft />
            <div className={style.main}>
                <Link to='pages=1'><div className={style.portfolio}></div></Link>
                <Link to='pages=2'><div className={style.portfolio}></div></Link>
                <Link to='pages=2'><div className={style.portfolio}></div></Link>
            </div>
        </div>
    )
}