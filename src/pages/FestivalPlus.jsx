import React from 'react';
import { useParams } from 'react-router-dom';
import festivalData from '../json/festival.json';

const FestivalPlus = () => {
  const { id } = useParams();
  const festival = festivalData.records.find((f) => f.id === parseInt(id));

  if (!festival) {
    return <div>축제 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{festival.축제명}</h1>
      <p>장소: {festival.개최장소}</p>
      <p>시작일: {festival.축제시작일자}</p>
      <p>종료일: {festival.축제종료일자}</p>
      <p>내용: {festival.축제내용}</p>
      <a href={festival.홈페이지주소} target="_blank" rel="noopener noreferrer">
        홈페이지로 이동
      </a>
    </div>
  );
};

export default FestivalPlus;
