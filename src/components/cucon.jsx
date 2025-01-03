import React, { useState } from "react";
import festivalData from "../json/festival.json"
import FavoriteIcon from "@mui/icons-material/Favorite"; // 좋아요 아이콘
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // 좋아요 해제 아이콘

const Cucon = ({ visibleFestivals = [], handleFestivalClick, likes, toggleLike }) => {
    return (
        <div>
            {visibleFestivals.length > 0 ? (
                visibleFestivals.map((festival) => (
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
                        <div
                            className="like-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleLike(festival.축제명);
                            }}
                        >
                            {likes[festival.축제명] ? (
                                <FavoriteIcon style={{ color: "red" }} />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </div>
                        <p className="festival_local">
                            장소: {festival.개최장소 || "정보 없음"}
                        </p>
                        <p>내용: {festival.축제내용}</p>
                        <div className="list-link">
                            {festival.홈페이지주소 ? (
                                <a
                                    href={festival.홈페이지주소}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {festival.홈페이지주소}
                                </a>
                            ) : (
                                <span>홈페이지 정보 없음</span>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>축제 정보가 없습니다.</p>
            )}
        </div>
    );
};

export default Cucon;
