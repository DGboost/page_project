import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';
import Header from './LoginComponents/Header';
import WelcomeMessage from './LoginComponents/WelcomeMessage';
import LoginForm from './LoginComponents/LoginForm';
import SignUpPrompt from './LoginComponents/SignUpPrompt';

const Login = (props) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleLogin = async () => {
    setIsLoading(true); // 로딩 시작

    try {
      const response = await axios.post('http://54.180.100.241:5000/login', {
        userId,
        password
      });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token); // JWT 토큰 저장
        navigate('/home'); // 홈페이지 또는 대시보드로 리디렉션
      } else {
        alert(response.data.message || '로그인 실패: 잘못된 아이디 또는 비밀번호');
      }
    } catch (error) {
      console.error('로그인 요청 실패', error);
      alert('로그인 요청 중 오류 발생');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const navigateToSignup = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col h-[1024px] items-center pt-[80px] pb-0 px-0 relative bg-white">
      <Header />
      <WelcomeMessage />
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        isLoading={isLoading} // 로딩 상태 전달
      />
      <SignUpPrompt onSignUpClick={navigateToSignup} />
    </div>
  );
};

export default Login;