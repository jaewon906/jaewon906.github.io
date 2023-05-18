import { Link } from 'react-router-dom'
import style from '../css/asideLeft.module.css'
import { useRef, useState } from 'react'

export default function AsideLeft(props) {
    const [isActive, setIsActive] = useState([false, false, false, false, false])
    const inputRef = useRef();
    const menuListRef = useRef([]);
    const styled = {

        transition: 'background-color 0.3s ease',
        backgroundColor: props.mode ? 'rgb(30,30,30)' : 'rgb(250,250,250)',
          
    }
    const fontStyle = {
        transition: 'color 0.3s ease',
        color: props.mode ? 'white' : 'black',
    }
    const menuList = [
        {
            title: "GIT",
            list: ["git"]
        },
        {
            title: "frontEnd",
            list: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "backEnd",
            list: ["MySQL"]
        },
        {
            title: "알고리즘",
            list: ["백준"]
        },
        {
            title: "일상 / 잡담",
            list: ["hi"]
        }

    ]


    function search() {
        console.log(inputRef.current.value)
    }

    function showContents(e) {
        console.log(e.currentTarget.id)
        setIsActive((val) => !val
        )
        // console.log(menuListRef.current[e.currentTarget.id].style.display="none")
    }

    return (
        <div style={styled} className={style.container}>
            <div className={style.box}>
                <div className={style.imageBox}>
                    <div className={style.profileImage}></div>
                </div>
                <div className={style.introductionBox}>안녕하세요! <br />풀스택 개발자를 꿈꾸는 박재원 입니다!</div>
                <div className={style.linkBox}>
                    <a href='https://facebook.com' title='facebook'><i className="fa-brands fa-facebook"></i></a>
                    <a href='mailto:ploi9@naver.com' title='Email'><i className="fa-solid fa-envelope"></i></a>
                    <a href='https://github.com/jaewon906' title='github'><i className="fa-brands fa-github"></i></a>
                </div>
                <div className={style.searchBox}>
                    <i onClick={search} className="fa-solid fa-magnifying-glass"></i>
                    <input ref={inputRef} type='text'></input>
                </div><br /><br />
                <div className={style.categoriesBox}>
                    <h4><i className="fa-regular fa-bookmark"></i> 카테고리</h4><br />

                    {menuList.map((value, idx) => {
                        return (
                            <div ref={el => { menuListRef.current[idx] = el }} onClick={showContents} id={idx} key={idx}>
                                <div><h4>{value.title}</h4><i className="fa-solid fa-chevron-down"></i></div>
                                <div className={`${style.menuList} ${isActive ? style.expanded : style.contracted
                                    }`}>
                                    {value.list.map((value, idx) => {
                                        return (<div  key={idx} className={style.list}><Link style={fontStyle} key={idx}>{value}</Link><p>(1)</p></div>)
                                    })}
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className={style.imageBox}></div>
                <div className={style.imageBox}></div>
                <div className={style.imageBox}></div>

            </div>
        </div>
    )
}