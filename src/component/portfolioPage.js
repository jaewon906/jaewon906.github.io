import { Link } from 'react-router-dom'
import style from '../css/portfolio.module.css'
import AsideLeft from './asideLeft'
export default function PortfolioPage() {
    return (
        <div className={style.container}>
            <AsideLeft />
            <div className={style.main}>
                <Link to='pages=1'>
                    <div className={style.portfolio}>
                        <div style={{width:'100%', height:'60%',display:'flex'}}>
                            <div className={style.portfolioImg}></div>
                            <div className={style.portfolioSection}></div>
                        </div>
                        <div className={style.portfolioMain}></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}