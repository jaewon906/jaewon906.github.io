import style from '../css/jw_header.module.css'
import { useState } from 'react'
import {Link} from 'react-router-dom' 

function Header_JW(){
    let a=[true, false, false, false]
    const[onOff, setOnOff] = useState(a)

    const onOffFunction = (e) => {
       let b = e.target.id
       a = [false, false, false, false]

       for(var i=0; i<a.length; i++){
         if(b===`header${i+1}`){
            a[i] = true
         }
       }
       setOnOff(a)
    }
            return(
                <>
                <div className={style.container}>
            <div className={style.header}>
                <div className={style.menu}>
                    <Link to='/' onClick={onOffFunction} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt=''/></Link>
                    <Link to='/main' className={style.linkStyle}><button id='header1' onClick={onOffFunction} className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</button></Link>
                    <Link to='/main/myInfo' className={style.linkStyle}><button id='header2' onClick={onOffFunction} className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>
                    <Link to='/' className={style.linkStyle}><button id='header3' onClick={onOffFunction} className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</button></Link>
                    <Link to='/' className={style.linkStyle}><button id='header4' onClick={onOffFunction} className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</button></Link>
                </div>
          
                      <>
                               <div style={{marginLeft:'670px'}}>{user.username}</div>
                            <div className={style.logIn}>
                                <Link to='/main' onClick={onLogout} ><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그아웃</Link>
                                {/* <Button onClick={onLogout}>로그아웃</Button> */}
                            </div></>
                         
                            <div className={style.logIn}>
                                <Link to='/login'><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" />로그인</Link>
                                {/* <Button to="/login">로그인</Button> */}
                            </div>
                        
            </div>
        </div>
                </>
            )
        }
//     let a=[false, false, false, false]
//     const[onOff, setOnOff] = useState(a)

//     const onOffFunction = (e) => {
//        let b = e.target.id
//        a = [false, false, false, false]

//        for(var i=0; i<a.length; i++){
//          if(b===`header${i+1}`){
//             a[i] = true
//          }
//        }
//        setOnOff(a)
//     }

//     return(
//         <>
//         <div className={style.container}>
//             <div className={style.header}>
//                 <div className={style.menu}>
//                     <a href='/' onClick={onOffFunction} ><img src={process.env.PUBLIC_URL + '../mainImg/logo.png'} alt=''/></a>
//                     <Link to='/main/' className={style.linkStyle}><button id='header1' onClick={onOffFunction} className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</button></Link>
//                     <Link to='/main/myInfo' className={style.linkStyle}><button id='header2' onClick={onOffFunction} className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header3' onClick={onOffFunction} className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</button></Link>
//                     <Link to='/' className={style.linkStyle}><button id='header4' onClick={onOffFunction} className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</button></Link>
//                 </div>
//                 <div className={style.logIn}>
//                     <Link to='/login'><i style={{marginRight:'5px'}} className="fa-solid  fa-arrow-right-to-bracket" /> 로그인</Link>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

export default Header_JW;