import React from 'react';

const WritePost = ({ onTogglePostForm, isWriting }) => {
    const userId = localStorage.getItem('userId');

    return (
        <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                <div className="relative w-[520px] font-bold text-black text-[40px] text-center leading-[48px]">
                    게시판
                </div>
                <button
                    className="flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-blue-500 hover:bg-blue-700 rounded w-60"
                    onClick={onTogglePostForm}
                >
                    <div className="relative w-fit text-white font-bold text-[16px] leading-[24px] whitespace-nowrap">
                        {isWriting ? '글쓰는 중' : '글쓰기'}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default WritePost;
