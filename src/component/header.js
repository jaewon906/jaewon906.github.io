import { Link } from 'react-router-dom'
import style from '../css/header.module.css'
import ScrollBar from '../features/scrollBar';
import { useDispatch, useSelector } from 'react-redux';
import { leftOnOffRdc } from '../features/data';
import { useState } from 'react';
import ToggleBtn from '../features/toggleBtn';

export default function Header(props) {

    const onOff = useSelector(store => store.dataSet.asideLeftonOff);
    const [a, setA] = useState(onOff)
    const dispatch = useDispatch();
    const styled = {
        transition: 'background-color 0.3s ease',
        backgroundColor: props.mode ? 'rgb(30,30,30)' : 'white',
        boxShadow: props.mode ? "" : '0px 0px 10px 0px gray'

    };

    const fontStyle = {
        transition: 'color 0.3s ease',
        color: props.mode ? 'white' : 'black',
    }

    const clickAndActive = () => {
        setA(val => !val)
        dispatch(leftOnOffRdc(a))
    }

    function permission() {
        const a = prompt("비밀번호를 입력하세요", "")
        if (a !== "1234") {
            alert("다시 입력하세요")

        }
        // else{
        //     switch(e.target.id){
        //         case "resume":window.location.href='resume/';break;
        //         case "portfolio":window.location.href='/portfolio/';break;
        //         default:
        //     }

        // }
    }

    return (
        <div style={styled} className={style.header}>
            <div className={style.innerHeader}>
                <div className={style.headerLeft}>
                    <Link style={fontStyle} to='/'><h4>홈</h4></Link>
                    <Link style={fontStyle} to='resume/' onClick={permission}><h4 id='resume'>지원서</h4></Link>
                    <Link style={fontStyle} to='portfolio/' onClick={permission}><h4 id='portfolio'>포트폴리오</h4></Link>
                </div>
                <div style={fontStyle} className={style.headerRight}>
                    <p style={{fontSize:'14px', paddingRight:'10px'}}>menuBar</p>
                    <div style={{marginRight:'50px'}} onClick={clickAndActive}><ToggleBtn active={onOff} className={style.onOffBtn} type='checkbox'></ToggleBtn></div>
                </div>
            </div>
            <ScrollBar mode={props} />
        </div>
    )
}