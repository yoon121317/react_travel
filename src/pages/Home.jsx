import React from "react";
import "../pages/Home.css"
import { Button, Grid } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  // 원하는 아이콘을 import

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/Signin")
    }

    const goSignup = () => {
        navigate("/Signup")
    }

    return (
        <div className="Home-page">
            <div className="visual-page">
                <div className="Home-blind">
                    <div className="Home-header">
                        <div className="Home-header-Logo">Travel</div>
                        <div className="Home-header-menu">
                            <div>소개</div>
                            <div>추천관광지</div>
                            <div>관광지검색</div>
                            <div>마이페이지</div>
                        </div>
                        <div className="Home-Login">
                            <Button onClick={goLogin} color="#fff">로그인</Button>
                            <Button onClick={goSignup} color="white">회원가입</Button>
                        </div>
                    </div>
                    <div className="visual-text">
                        <div className="visual-main-text">
                            <form action="">
                                추억을 채우는 여행지 <br />
                            </form>
                            아름다운 풍경과 독특한 체험이 가득한 여행지로 떠나보세요.
                        </div>
                    </div>
                    <div className="search">
                        <div className="search-box">
                            <input className="search-input" type="text" placeholder="검색어를 입력해주세요" />
                            <Button>
                                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="Home-wrap">
                <div className="Home-wrap-title fir-wrap">추천 관광지</div>
                <div className="Home-wrap-title">인기 관광지</div>
                <div className="Home-wrap-title">갤러리</div>
            </div>

            <div className="footer">
                <div className="footer-menu">
                    <div className="footer-text">
                        <div>연락처 : 010-9966-6587</div>
                        <div>고객센터  |  문의하기  |  이용약관  |  개인정보처리방침</div>
                        <div>Copyright ⓒ Travel All Rights Reserved</div>
                    </div>
                    <div></div>
                    <div className="footer-logo">Travel</div>
                </div>
            </div> 
        </div>
    )
}

export default Home;