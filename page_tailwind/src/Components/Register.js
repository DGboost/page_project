import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import Header from './RegisterComponents/Header';
import RegistrationForm from './RegisterComponents/RegistrationForm';

const Register = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUserIdDuplicate, setIsUserIdDuplicate] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  // 아이디 중복 확인 함수
  const checkUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/check-userId/${userId}`);
      setIsUserIdDuplicate(response.data.isDuplicate);
    } catch (error) {
      console.error('Error checking userId', error);
      alert('아이디 중복 확인 중 오류가 발생했습니다.'); // 사용자에게 오류 메시지 표시
    }
  };

  // 회원가입 핸들링 함수
  const handleRegister = async () => {
    if (isUserIdDuplicate) {
      alert('이미 사용 중인 아이디입니다.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 비밀번호 길이 및 문자 검증 (예: 최소 6자)
    if (password.length < 6) {
      alert('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    setIsLoading(true); // 로딩 시작

    try {
      const response = await axios.post('http://localhost:5000/register', {
        userId,
        password
      });
      console.log(response.data);
      navigate('/login'); // 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error('Registration failed:', error);
      alert('회원가입 중 오류가 발생했습니다.'); // 사용자에게 오류 메시지 표시
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="flex flex-col h-[1024px] items-center pt-[80px] pb-0 px-0 relative bg-white">
      <Header />
      <RegistrationForm
        userId={userId}
        setUserId={setUserId}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleRegister={handleRegister}
        checkUserId={checkUserId}
        isUserIdDuplicate={isUserIdDuplicate}
        isLoading={isLoading} // 로딩 상태 전달
      />
    </div >
  );
};

export default Register;