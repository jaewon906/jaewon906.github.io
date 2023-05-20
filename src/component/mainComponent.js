import style from '../css/mainComponent.module.css';
import App from '../App';
import Header from './header';
import Loading from './loading'
import { useEffect, useState } from 'react';
import TopBtn from '../features/topBtn';
import { useSelector } from 'react-redux';

export default function MainComponent() {
    const [loading, setLoading] = useState(0)
    const data = useSelector(store=>store.dataSet);
    const mode = data.mode
    const styled={
        transition: 'background-color 0.3s ease',
        backgroundColor: mode ? 'rgb(30,30,30)' : 'white',
        color: mode ? 'white' : 'rgb(30,30,30)',
    }
    useEffect(()=>{
        setLoading()
    },[loading]) 

    return (
        <>{
            !loading ?
            <div className={style.container} >
                <Header mode={mode}/>
                <div style={styled} className={style.box1}>
                    <App />
                    <TopBtn/>
                </div>
            </div> 
            : <Loading />}

        </>
    )

}