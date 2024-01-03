import React from "react";

const LoginForm = ({ userId, setUserId, password, setPassword, handleLogin }) => {
  return (
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
          <div className="flex flex-col w-[160px] items-center justify-center p-[12px] relative flex-[0_0_auto] bg-stone-400 hover:bg-stone-600 rounded-[8px]">
            <div className="w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[16px] leading-[24px] whitespace-nowrap relative tracking-[0]">
              로그인
            </div>
          </div>
        </button>
      </div>
      <img className="absolute w-[1440px] h-px top-[408px] left-0 object-cover" alt="Vector" src="image.svg" />
    </div>
  );
};

export default LoginForm;
