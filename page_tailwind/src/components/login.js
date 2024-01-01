import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './login.css'

const Login = (props) => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        userId,
        password
      });
      if (response.data.success) {
        // 로그인 성공 처리
        navigate('/home'); // 홈페이지 또는 대시보드로 리디렉션
      } else {
        // 로그인 실패 처리
        alert('로그인 실패: 잘못된 아이디 또는 비밀번호');
      }
    } catch (error) {
      console.error('로그인 요청 실패', error);
      alert('로그인 요청 중 오류 발생');
    }
  };

  // 회원가입 페이지로 이동 (추가 기능 구현 필요)
  const navigateToSignup = () => {
    // 여기에 회원가입 페이지 이동 로직 추가
    navigate('/register');
  };

  return (
    <div className="flex flex-col h-[1024px] items-center pt-[80px] pb-0 px-0 relative bg-white">
      <div className="flex w-full h-[80px] items-center justify-center gap-[20px] p-[20px] absolute top-0 left-0 bg-white shadow-[0px_0px_6px_#0000001f]">
        <div className="relative w-[40px] h-[40px] bg-[#0000001a] rounded-[100px]" />
        <div className="flex-1 [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] leading-[36px] relative tracking-[0]">
          로그인
        </div>
      </div>
      <div className="px-[170px] py-[60px] overflow-hidden flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
          <div className="w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center leading-[48px] relative tracking-[0]">
            환영합니다!
          </div>
          <div className="relative w-[520px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px]">
            로그인하여 게시판에 참여하세요.
          </div>
        </div>
        <img className="absolute w-[1440px] h-px top-[216px] left-0 object-cover" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="px-[170px] py-[60px] overflow-hidden flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
          <div className="w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center leading-[48px] relative tracking-[0]">
            로그인 정보 입력
          </div>
          <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
              아이디
            </div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력하세요"
              className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
            />
          </div>
          <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
              비밀번호
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
            />
          </div>
          <button
            className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto] all-[unset] box-border"
            onClick={handleLogin} style={{ cursor: 'pointer' }}>
            <div className="flex flex-col w-[160px] items-center justify-center p-[12px] relative flex-[0_0_auto] bg-black rounded-[8px]">
              <div className="w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                로그인
              </div>
            </div>
          </button>
        </div>
        <img className="absolute w-[1440px] h-px top-[408px] left-0 object-cover" alt="Vector" src="image.svg" />
      </div>
      <div className="p-[60px] flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex h-[100px] justify-center gap-[60px] flex-[0_0_auto] items-center relative">
          <div className="self-stretch w-[162px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[17px] text-center leading-[28px] relative tracking-[0]">
            계정이 없으신가요?
          </div>
          <div className="self-stretch w-[74px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[17px] text-center leading-[28px] relative tracking-[0]" onClick={navigateToSignup} style={{ cursor: 'pointer' }}>
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;