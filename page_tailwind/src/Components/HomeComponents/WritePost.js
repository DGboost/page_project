// writepost.js
import React from 'react';
import PostForm from './PostForm';

const WritePost = ({ onTogglePostForm }) => {
    const userId = localStorage.getItem('userId');

    return (
        <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                <div className="relative w-[520px] font-bold text-black text-[40px] text-center leading-[48px]">
                    게시판
                </div>
                <button
                    className="flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-stone-600 hover:bg-stone-800 rounded-[8px]"
                    onClick={onTogglePostForm} // 게시글 작성 폼 표시 함수 호출
                >
                    <div className="relative w-fit font-medium text-white text-[16px] leading-[24px] whitespace-nowrap">
                        글쓰기
                    </div>
                </button>
            </div>
        </div>
    );
};

export default WritePost;
