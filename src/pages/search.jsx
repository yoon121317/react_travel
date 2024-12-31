import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../pages/Home.css';
import "../json/festival.json"

function Search() {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // 전체 데이터
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터
  const [categories, setCategories] = useState([]); // 카테고리 목록
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리
  const [searchTerm, setSearchTerm] = useState(''); // 검색어

  const [fstvlNm, setFstvlNm] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  useEffect(() => {
    // 데이터 및 카테고리 가져오기
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get('API_ENDPOINT_FOR_DATA');
        const categoriesResponse = await axios.get('API_ENDPOINT_FOR_CATEGORIES');
        setData(dataResponse.data);
        setCategories(categoriesResponse.data);
        setFilteredData(dataResponse.data); // 초기에는 전체 데이터를 표시
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // 카테고리 또는 검색어가 변경될 때마다 데이터 필터링
    const filterData = () => {
      let filtered = data;

      if (selectedCategory) {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }

      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [selectedCategory, searchTerm, data]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const goLogin = () => {
    navigate('/Signin');
  };

  const goSignup = () => {
    navigate('/Signup');
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
              추억을 채우는 여행지 <br />
              아름다운 풍경과 독특한 체험이 가득한 여행지로 떠나보세요.
            </div>
          </div>
          <div className="search">
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                placeholder="검색어를 입력해주세요"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button>
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="Home-wrap">
        <div className="Home-wrap-title fir-wrap">검색</div>
        <div className="categories">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
            >
              {category}
            </Button>
          ))}
          <div>
            {data.map(item => (
                <div key={item.id}>
                </div>
            ))}
          </div>
        </div>
        <div className="results">
          {filteredData.map((item) => (
            <div key={item.id} className="result-item">
              <h3>{item.fstvlNm}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <div className="footer-menu">
          <div className="footer-text">
            <div>연락처 : 010-9966-6587</div>
            <div>고객센터  |  문의하기  |  이용약관  |  개인정보처리방침</div>
            <div>Copyright ⓒ Travel All Rights Reserved</div>
          </div>
          <div className="footer-logo">Travel</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
