import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-[80px] items-center justify-center gap-[20px] p-[20px] absolute top-0 left-0 bg-white shadow-[0px_0px_6px_#0000001f]">
      <div className="relative w-[40px] h-[40px] bg-[#0000001a] rounded-[100px]" />
      <div className="flex-1 [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] leading-[36px] relative tracking-[0]">
        회원가입
      </div>
    </div>
  );
};

export default Header;