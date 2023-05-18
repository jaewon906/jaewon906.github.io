import { Link } from 'react-router-dom'
import style from '../css/asideLeft.module.css'
import { useRef } from 'react'

export default function AsideLeft() {
    const inputRef = useRef();
    const menuListRef = useRef([]);
    const menuList = [
        {
            title: "git",
            list: [""]
        },
        {
            title: "frontend",
            list: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "backend",
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
        console.log(e)
        switch (e.target.classList.value) {
            case "": e.target.classList.add('show');
                break;
            case "show": e.target.classList.remove('show');
                break;
        }
        if (e.target.classList.value === "show") {

            e.target.children[1].style.rotate = '180deg'
            e.target.style.height = "auto"
        }
        else {
            e.target.children[1].style.rotate = 'none'
            e.target.style.height = "20px"
        }
    }

    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.imageBox}>
                    <div className={style.profileImage}></div>
                </div>
                <div className={style.introductionBox}>안녕하세요! <br />풀스택 개발자를 꿈꾸는 박재원 입니다!</div>
                <div className={style.linkBox}>
                    <a href='' title='facebook'><i className="fa-brands fa-facebook"></i></a>
                    <a href='mailto:ploi9@naver.com' title='Email'><i className="fa-solid fa-envelope"></i></a>
                    <a href='https://github.com/jaewon906' title='github'><i className="fa-brands fa-github"></i></a>
                    <a><img url='' /></a>
                </div>
                <div className={style.searchBox}>
                    <i onClick={search} className="fa-solid fa-magnifying-glass"></i>
                    <input ref={inputRef} type='text'></input>
                </div><br /><br />
                <div className={style.categoriesBox}>
                    <h4><i className="fa-regular fa-bookmark"></i> 카테고리</h4><br />

                    {menuList.map((value, idx) => {
                        return (
                            <div className='show' id={idx} key={idx} style={{ overflow: 'hidden' }} onClick={showContents}>
                                <h4>{value.title}</h4><i className="fa-solid fa-chevron-down"></i>      
                                <Link>{value.list}</Link>
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