import React from "react";

import { TextField, Checkbox, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const goSignIn = () => {
        navigate("/SignIn")
    }
    
    return (
        <div className="Sign-in-page">
            <div className="Sign-In-title">Travel</div>
            <div className="Sign-In-text">회원가입</div>
            <div className="sign-input">
            <TextField
                label="아이디"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'lightgray', // 기본 테두리 색상
                    },
                    '&:hover fieldset': {
                        borderColor: 'lightgray', // 호버 시 테두리 색상
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#FF6A00', // 포커스 시 테두리 색상
                    },
                    },
                    '& .MuiInputLabel-root': {
                        color: '', // 기본 label 색상
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#FF6A00', // 포커스 상태에서의 label 색상
                      },
                      '& .MuiInputLabel-root.Mui-error': {
                        color: 'red', // 에러 상태에서의 label 색상
                      },
                }}
                fullWidth
                placeholder="아이디를 입력하세요."
            />

            </div>
            <div className="sign-input">
                <TextField
                    label="비밀번호"
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'lightgray', // 기본 테두리 색상
                        },
                        '&:hover fieldset': {
                            borderColor: 'lightgray', // 호버 시 테두리 색상
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FF6A00', // 포커스 시 테두리 색상
                        },
                        },
                        '& .MuiInputLabel-root': {
                            color: '', // 기본 label 색상
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#FF6A00', // 포커스 상태에서의 label 색상
                        },
                        '& .MuiInputLabel-root.Mui-error': {
                            color: 'red', // 에러 상태에서의 label 색상
                        },
                    }}
                    fullWidth
                    placeholder="비밀번호를 입력하세요."
                />
            </div>
            
            <div className="sign-input">
                <TextField
                    label="비밀번호 재입력"
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'lightgray', // 기본 테두리 색상
                        },
                        '&:hover fieldset': {
                            borderColor: 'lightgray', // 호버 시 테두리 색상
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FF6A00', // 포커스 시 테두리 색상
                        },
                        },
                        '& .MuiInputLabel-root': {
                            color: '', // 기본 label 색상
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#FF6A00', // 포커스 상태에서의 label 색상
                        },
                        '& .MuiInputLabel-root.Mui-error': {
                            color: 'red', // 에러 상태에서의 label 색상
                        },
                    }}
                    fullWidth
                    placeholder="비밀번호를 재입력하세요."
                />
            </div>

            <div className="Sign-button-box">
                <Button className="Sign-button" sx={{color: 'white'}}>회원가입</Button>
            </div>
            <div className="sign-up-text" onClick={goSignIn}>이미 계정이 있으신가요?</div>
            <div className="sign-or-text">
                <div className="sign-line"></div>
                <div>또는</div>
                <div className="sign-line"></div>
            </div>
            <div className="google-login-box">
                <Button className="google-login" fullWidth>
                    <img src="../../public/images/googleicon.png" alt="" />
                    <div>Google 계정으로 가입하기</div>
                </Button>
            </div>
        </div>
    )
}

export default SignUp;