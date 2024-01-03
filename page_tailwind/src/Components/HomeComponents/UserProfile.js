import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

const UserProfile = ({ handleLogout, onRefreshPosts }) => {
      const [isModalOpen, setModalOpen] = useState(false);
    const [currentUserNickname, setCurrentUserNickname] = useState('');

    // fetchUserInfo 함수를 컴포넌트 최상위 레벨로 이동
    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user-info', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCurrentUserNickname(response.data.nickname);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        fetchUserInfo();
    };

    return (
        // 사용자 정보 관련 마크업 및 로직
        <div className="gap-[40px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[100px] h-[100px] bg-[#d8d8d880] rounded-[50px] hidden md:flex" />
            <div className="flex flex-col gap-[12px] flex-1 grow items-center relative">
                <div className="relative self-stretch min-w-[150px] font-bold text-black text-[24px] tracking-[0] leading-[32px]">
                    {currentUserNickname || '사용자 이름'}
                </div>
                <div className="flex items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[2px] px-[4px] py-[2px] relative flex-[0_0_auto] bg-[#d8d8d880] rounded-[2px] overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                        <div className="relative w-fit mt-[-0.50px] text-black text-[12px] tracking-[0] leading-[16px] whitespace-nowrap">
                            Gold Member
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-col inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                <button
                    className="flex-[0_0_auto] flex flex-col w-[160px] items-center justify-center p-[12px] relative rounded-[8px] border border-solid border-black"
                    onClick={handleLogout} // 로그아웃 처리 함수 사용
                    style={{ cursor: 'pointer' }}
                >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        로그아웃
                    </div>
                </button>
                <button onClick={openModal} className="flex-[0_0_auto] flex flex-col w-[160px] items-center justify-center p-[12px] relative bg-black rounded-[8px]">
                    <div className="relative w-fit mt-[-1.00px] font-medium text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        프로필 수정
                    </div>
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    currentNickname={currentUserNickname}
                    setCurrentNickname={setCurrentUserNickname}
                    onRefreshPosts={onRefreshPosts}
                />
            </div>

            <img className="top-[228px] absolute w-[1419px] h-px left-0 object-cover" alt="Vector" src="vector-200-3.svg" />
        </div>
    );
};

export default UserProfile;
