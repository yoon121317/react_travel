import React from "react";
import "../pages/Home.css"
import { Button, Grid } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  // 원하는 아이콘을 import
import OpenAI from "openai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cucon from "../components/cucon";

function Home() {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/Signin")
    }

    const goSignup = () => {
        navigate("/Signup")
    }

    const goFestivalList = () => {
        navigate("/FestivalList")
    }

      // OpenAI 클라이언트 초기화
      const client = new OpenAI({
        apiKey: process.env.REACT_APP_API_KEY, // 환경 변수로 설정된 OpenAI API 키
        dangerouslyAllowBrowser: true, // 브라우저 환경에서 클라이언트 사용 허용
      });
    
      const [input, setInput] = useState(""); // 사용자 입력
      const [response, setResponse] = useState(""); // OpenAI 응답
      const [loading, setLoading] = useState(false); // 로딩 상태
    
      // API 호출 핸들러
      const handleGenerate = async () => {
        if (!input.trim()) {
          alert("질문을 입력하세요.");
          return;
        }
    
        setLoading(true);
        setResponse("");
    
        try {
          const chatCompletion = await client.chat.completions.create({
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant specializing in travel and festival information. Provide concise, engaging, and accurate responses.",
              },
              { role: "user", content: input },
            ],
            model: "gpt-4", // GPT-4 모델 사용
          });
    
          setResponse(chatCompletion.choices[0].message.content);
        } catch (error) {
          console.error("Error fetching response:", error);
          setResponse("An error occurred while fetching the response.");
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="Home-page">
            <div className="visual-page">
                <div className="Home-blind">
                    <div className="Home-header">
                        <div className="Home-header-Logo">Travel</div>
                        <div className="Home-header-menu">
                            <div>소개</div>
                            <div>추천관광지</div>
                            <div onClick={goFestivalList}>관광지검색</div>
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
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="검색어를 입력해주세요."
                            rows="1"
                        ></textarea>
                            <button className="search_icon" onClick={handleGenerate} disabled={loading}>
                                {loading ? (
                                    <p>검색</p>
                                ) : (
                                    <FontAwesomeIcon className="glassicon" icon={faMagnifyingGlass} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={response ? "response" : "response hidden"}>
            {response && (
                <div>
                    <p>{response}</p>
                </div>
            )}
            </div>

            <div className="Home-wrap">
                <div className="Home-wrap-title fir-wrap">추천 관광지</div>
                <Cucon />
                <div className="Home-wrap-title">인기 관광지</div>
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