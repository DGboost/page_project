import React from 'react';

const PostItem = ({ title, author, nick, date }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] px-0 py-[12px] relative flex-1 grow">
      <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
        {/* 아이콘 또는 이미지 */}
        <div className="absolute w-[100px] h-[100px] -top-px left-0 font-normal text-black text-[62.5px] text-center leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
          📄
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px] relative self-stretch w-full">
        <div className="relative self-stretch font-normal text-black text-[20px] text-center leading-[28px]">
          {title}
        </div>
        <div className="font-normal text-[#00000080] text-[16px] text-center leading-[24px]">
          {author}
        </div>
      </div>
      <div className="font-medium text-black text-[28px] text-center leading-[36px]">
        {date}
      </div>
    </div>
  );
};

export default PostItem;
