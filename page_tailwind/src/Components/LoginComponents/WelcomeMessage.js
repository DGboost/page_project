import React from "react";

const WelcomeMessage = () => {
  return (
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
  );
};

export default WelcomeMessage;
