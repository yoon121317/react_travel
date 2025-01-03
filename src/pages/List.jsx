import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FestivalList.css";
import festivalData from "../json/festival.json";
import Button from "@mui/material/Button"; // Material UI Button
import FavoriteIcon from "@mui/icons-material/Favorite"; // 좋아요 아이콘
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // 좋아요 해제 아이콘

const List = () => {
  const [festivals, setFestivals] = useState([]); // 축제 데이터
  const [likes, setLikes] = useState({}); // 좋아요 상태
  const [search, setSearch] = useState(""); // 검색 상태
  const [searchCategory, setSearchCategory] = useState("축제명"); // 검색 카테고리
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 7; // 한 페이지에 표시할 항목 수
  const maxPageButtons = 5; // 표시할 최대 페이지 번호 수
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/Signin");
  };

  const goSignup = () => {
    navigate("/Signup");
  };

  const handleFestivalClick = (id) => {
    navigate(`/festivalList/${id}`);
  };

  useEffect(() => {
    // JSON 데이터 설정
    setFestivals(festivalData.records || []);
    // 좋아요 상태 초기화
    const initialLikes = {};
    festivalData.records.forEach((festival) => {
      initialLikes[festival.id] = false; // 초기 상태는 모두 "좋아요 안 함"
    });
    setLikes(initialLikes);
  }, []);

  // 좋아요 토글 핸들러
  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // 현재 상태 반전
    }));
  };

  // 검색 필터링
  const filteredFestivals = festivals.filter((festival) => {
    if (searchCategory === "축제명") {
      return festival.축제명.toLowerCase().includes(search.toLowerCase());
    } else if (searchCategory === "장소") {
      return (
        festival.개최장소 &&
        festival.개최장소.toLowerCase().includes(search.toLowerCase())
      );
    }
    return false;
  });

  // 페이지네이션 데이터 슬라이싱
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleFestivals = filteredFestivals.slice(startIndex, endIndex);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredFestivals.length / itemsPerPage);

  // 페이지 번호 표시 범위 계산
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
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
              <Button onClick={goLogin} color="#fff">
                로그인
              </Button>
              <Button onClick={goSignup} color="white">
                회원가입
              </Button>
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
        </div>
      </div>

      <div className="List-body">
        <div className="search-container">
          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="search-category"
          >
            <option value="축제명">축제명</option>
            <option value="장소">장소</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`${searchCategory}을(를) 검색하세요`}
            className="search-input"
          />
        </div>
        <div className="List-box">
          {visibleFestivals.map((festival) => (
            <div
              key={festival.id}
              className="list-mo"
              onClick={() => handleFestivalClick(festival.id)}
            >
              <h1 className="festivel-title">{festival.축제명}</h1>
              <div className="festivel-Day">
                <p>시작일: {festival.축제시작일자}</p>
                <p className="left-day">종료일: {festival.축제종료일자}</p>
              </div>
              <p className="festival_local">
                장소: {festival.개최장소 || "정보 없음"}
              </p>
              <p>내용: {festival.축제내용}</p>
              <div className="list-link">
                <a
                  href={festival.홈페이지주소}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {festival.홈페이지주소}
                </a>
              </div>
              {/* 좋아요 버튼 */}
              <div className="like-button" onClick={(e) => {
                e.stopPropagation(); // 부모 클릭 이벤트 방지
                toggleLike(festival.축제명);
              }}>
                {likes[festival.축제명] ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="pagination">
          {startPage > 1 && (
            <>
              <Button
                onClick={() => handlePageChange(1)}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "#FF6A00",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#FF6A00",
                  },
                }}
                style={{ margin: "0 5px" }}
              >
                1
              </Button>
              {startPage > 2 && <span style={{ margin: "0 2px" }}></span>}
            </>
          )}
          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <Button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                variant={currentPage === pageNumber ? "contained" : "outlined"}
                sx={{
                  backgroundColor: "white",
                  color: "#FF6A00",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#FF6A00",
                  },
                }}
                style={{ margin: "0 5px" }}
              >
                {pageNumber}
              </Button>
            );
          })}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span style={{ margin: "0 2px" }}></span>}
              <Button
                onClick={() => handlePageChange(totalPages)}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "#FF6A00",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#FF6A00",
                  },
                }}
                style={{ margin: "0 5px" }}
              >
                {totalPages}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="footer-menu">
          <div className="footer-text">
            <div>연락처 : 010-9966-6587</div>
            <div>고객센터 | 문의하기 | 이용약관 | 개인정보처리방침</div>
            <div>Copyright ⓒ Travel All Rights Reserved</div>
          </div>
          <div></div>
          <div className="footer-logo">Travel</div>
        </div>
      </div>
    </div>
  );
};

export default List;
