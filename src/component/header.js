import { Link } from 'react-router-dom'
import style from '../css/header.module.css'
export default function Header(){
    function permission(e){
        const a = prompt("비밀번호를 입력하세요","")
        if(a !== "1234"){
            alert("다시 입력하세요")
            
        }
        else{
            switch(e.target.id){
                case "resume":window.location.href='/resume';break;
                case "portfolio":window.location.href='/portfolio';break;
                default:
            }
                           
        }
    }
    return(
        <div className={style.header}>
            <div className={style.headerLeft}>
                <Link to='/'><h4>홈</h4></Link>
                <Link onClick={permission}><h4 id='resume'>RESUME</h4></Link>
                <Link onClick={permission}><h4 id='portfolio'>포트폴리오</h4></Link>
            </div>
            <div className={style.headerRight}></div>
        </div>
    )
}