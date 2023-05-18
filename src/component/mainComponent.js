import style from '../css/mainComponent.module.css';
import App from '../App';
import Header from './header';
import AsideLeft from './asideLeft'
import ScrollBar from '../features/scrollBar';
import Loading from './loading'
import { useEffect, useState } from 'react';

export default function MainComponent() {
    const [loading, setLoading] = useState(0)
    useEffect(()=>{
        setLoading()
    },[loading])
    return (
        <>{
            !loading ?
            <div className={style.container}>
                <Header />
                <ScrollBar />
                <div className={style.box1}>
                    <AsideLeft />
                    <App />
                </div>
            </div> 
            : <Loading />}

        </>
    )

}