import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Header = () => {
    return (
        // 헤더 관련 마크업 및 로직
        <div className="flex w-full h-[80px] items-center justify-center gap-[20px] p-[20px] absolute top-0 left-0 bg-white shadow-[0px_0px_6px_#0000001f]">
            <div className="relative min-w-[40px] ml-[20px] h-[40px] bg-[#0000001a] rounded-[100px]" />
            <div className="flex-1 min-w-[200px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[28px] leading-[36px] relative tracking-[0]">
                게시판
            </div>
            <div className="inline-flex items-center justify-center gap-[40px] relative flex-[0_0_auto] bg-white">
                <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    홈
                </div>
                <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    내 게시글
                </div>
                <input
                    type="text"
                    placeholder="Search in site"
                    className="relative flex-1 mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#00000080] text-[14px] tracking-[0] leading-[20px] border border-gray-300 rounded-md p-2 hidden md:flex"
                />
                <FontAwesomeIcon icon={faSearch} className="text-3xl" style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default Header;
