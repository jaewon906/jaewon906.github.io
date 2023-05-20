import { Link } from 'react-router-dom'
import style from '../css/asideLeft.module.css'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';

export default function AsideLeft() {
    const [isActive, setIsActive] = useState()
    const inputRef = useRef();
    const menuListRef = useRef([]);
    const [asideLeftonOff, setAsideLeftonOff] = useState(true);
    const mode = useSelector(store => store.dataSet.mode)
    const styled = {

        transition: 'background-color 0.3s ease, visibility 0.3s ease, width 0.3s ease',
        backgroundColor: mode ? 'rgb(30,30,30)' : 'rgb(250,250,250)',
        width: asideLeftonOff ? '275px' : '0px',
        visibility: asideLeftonOff ? 'visible' : 'hidden',

    }
    const fontStyle = {
        transition: 'color 0.3s ease',
        color: mode ? 'white' : 'black',
    }
    const menuActive = {
        transition: 'visibility , max-height 0.3s',
        // display : none으로 적용하면 애니메이션이 적용이안되고
        // opacity :0 으로 하면 눈에 보이지만 않을뿐 요소는 존재함.
        // visibility : hidden으로 하면 애니메이션이 적용되는 display: none이라고 생각하면됨
        visibility: 'visible',
        // maxheight를 충분히 주고 요소가 있는 높이만큼 자동으로 적용되도록 함.
        maxHeight: '200px',

    }
    const menuInActive = {
        transition: 'visibility , max-height 0.3s',
        // display : none으로 적용하면 애니메이션이 적용이안되고
        // opacity :0 으로 하면 눈에 보이지만 않을뿐 요소는 존재함.
        // visibility : hidden으로 하면 애니메이션이 적용되는 display: none이라고 생각하면됨
        visibility: 'hidden',
        // maxheight를 충분히 주고 요소가 있는 높이만큼 자동으로 적용되도록 함.
        maxHeight: '0px',

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
            list: ["알고리즘"]
        },
        {
            title: "코딩테스트",
            list: ["백준"]
        },
        {
            title: "일상 / 잡담",
            list: ["hi"]
        }

    ]
    window.onresize = () => {
        if (window.innerWidth >= 1000) {
            setAsideLeftonOff(true)
        }
        else {
            setAsideLeftonOff(false)
        }
    }
    function search(e) {
        if (e.keyCode === 13) {

            console.log(inputRef.current.value)
        }
    }

    function showContents(idx) {

        setIsActive(idx === isActive ? null : idx)

        menuListRef.current.forEach(el => {
            el.classList.remove(`${style.rotate}`)
        })

        menuListRef.current[idx].classList.add(`${style.rotate}`)


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
                <div className={style.madeBy}>
                    <p>made by 박재원</p><br />
                    <p>with React.</p>
                </div>
                <div className={style.searchBox}>
                    <i onClick={search} className="fa-solid fa-magnifying-glass"></i>
                    <input onKeyDown={search} ref={inputRef} type='text'></input>
                </div><br /><br />
                <div className={style.categoriesBox}>
                    <h4><i style={{ marginRight: '10px' }} className="fa-regular fa-bookmark"></i> 카테고리</h4><br />

                    {menuList.map((value, idx) => {
                        return (
                            <div key={idx}>
                                <div id={idx} className={style.menu} onClick={() => { showContents(idx) }}><h4>{value.title}</h4><i ref={el => { menuListRef.current[idx] = el }} className='fa-solid fa-chevron-down'></i></div>
                                <div style={isActive === idx ? menuActive : menuInActive} className={style.menuList}>
                                    {value.list.map((value, idx) => {
                                        return (<div key={idx} className={style.list}><Link to={`contents/${value}`} style={fontStyle} key={idx}>{value}</Link><p>(1)</p></div>)
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