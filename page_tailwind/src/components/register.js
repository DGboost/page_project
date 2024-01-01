import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './register.css';


const Register = () => {

  const navigate = useNavigate();

  // 상태 관리
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUserIdDuplicate, setIsUserIdDuplicate] = useState(false);

  // 아이디 중복 확인 함수
  const checkUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/check-userId/${userId}`);
      setIsUserIdDuplicate(response.data.isDuplicate);
    } catch (error) {
      console.error('Error checking userId', error);
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

    try {
      const response = await axios.post('http://localhost:5000/register', {
        userId,
        password
      });
      console.log(response.data);
      // 성공 시 처리, 예: 페이지 리디렉션
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // 실패 시 처리
    }
  };
  return (
    <div className="flex flex-col h-[1024px] items-center pt-[80px] pb-0 px-0 relative bg-white">
      <div className="flex w-full h-[80px] items-center justify-center gap-[20px] p-[20px] absolute top-0 left-0 bg-white shadow-[0px_0px_6px_#0000001f]">
        <div className="relative w-[40px] h-[40px] bg-[#0000001a] rounded-[100px]" />
        <div className="flex-1 [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] leading-[36px] relative tracking-[0]">
          회원가입
        </div>
      </div>
      <div className="px-[170px] py-[60px] overflow-hidden flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
          <div className="w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center leading-[48px] relative tracking-[0]">
            회원 정보 입력
          </div>
          <p className="relative w-[520px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px]">
            아래 필드에 아이디, 비밀번호 및 비밀번호 확인을 입력해주세요.
          </p>
          <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
              아이디
            </div>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onBlur={checkUserId}
              className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
            />
            {isUserIdDuplicate && <p>이미 사용 중인 아이디입니다.</p>}
          </div>
          <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
              비밀번호
            </div>
            <input
              type="password" // 타입을 password로 변경
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
            />
          </div>
          <div className="flex flex-col w-3/4 items-start justify-center gap-[4px] relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] leading-[20px] relative tracking-[0]">
              비밀번호 확인
            </div>
            <input
              type="password" // 여기도 타입을 password로 변경
              placeholder="비밀번호를 다시 입력해주세요."
              value={confirmPassword} // value 속성 추가
              onChange={(e) => setConfirmPassword(e.target.value)} // onChange 핸들러 추가
              className="px-[12px] py-[8px] w-full bg-white rounded-[6px] border border-solid border-[#0000001a] text-[14px] leading-[20px]"
            />
          </div>
          <button
            className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto] all-[unset] box-border"
            onClick={handleRegister} style={{ cursor: 'pointer' }}>
            <div className="flex flex-col w-[160px] items-center justify-center p-[12px] relative flex-[0_0_auto] bg-black rounded-[8px]">
              <div className="w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
                가입하기
              </div>
            </div>
          </button>
        </div>
        <img className="absolute w-[1440px] h-px top-[540px] left-0 object-cover" alt="Vector" src="vector-200.svg" />
      </div>
    </div>
  );
};

export default Register;