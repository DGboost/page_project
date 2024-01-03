import React from "react";


const SignUpPrompt = ({ onSignUpClick }) => {
  return (
    <div className="p-[60px] flex items-center justify-center gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex h-[100px] justify-center gap-[60px] flex-[0_0_auto] items-center relative">
        <div className="self-stretch w-[162px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[17px] text-center leading-[28px] relative tracking-[0]">
          계정이 없으신가요?
        </div>
        <div 
          className="self-stretch w-[74px] mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[17px] text-center leading-[28px] relative tracking-[0]" 
          onClick={onSignUpClick} // onClick 이벤트 핸들러 연결
          style={{ cursor: 'pointer' }}
        >
          회원가입
        </div>
      </div>
    </div>
  );
};

export default SignUpPrompt;
