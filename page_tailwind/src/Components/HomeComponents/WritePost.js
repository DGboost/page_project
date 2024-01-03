import React, { useState } from 'react';
import WritePostModal from './WritePostModal';

const WritePost = ({ onPostAdded }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const userId = localStorage.getItem('userId');

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        onPostAdded(); // 게시글 추가 후 게시글 목록 업데이트를 위한 콜백 호출
    };

    return (
        // 글쓰기 관련 마크업 및 로직
        <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                <div className="relative w-[520px] mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[48px]">
                    게시판
                </div>
                <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                    <button
                        className="flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-stone-600 hover:bg-stone-800 rounded-[8px]"
                        onClick={openModal} // 모달 열기 함수 호출
                    >
                        <div className="relative w-fit font-medium text-white text-[16px] leading-[24px] whitespace-nowrap">
                            글쓰기 
                        </div>
                    </button>
                    {isModalOpen && <WritePostModal isOpen={isModalOpen} onClose={closeModal} userId={userId} />}
                </div>
            </div>
            <img className="absolute w-[1419px] h-px top-[348px] left-0 object-cover" alt="Vector" src="image.svg" />
        </div>
    );
};

export default WritePost;