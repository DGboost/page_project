import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, currentNickname, setCurrentNickname, onRefreshPosts }) => {
    const handleNicknameChange = (e) => {
        setCurrentNickname(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put('http://localhost:5000/api/update-nickname', {
                newNickname: currentNickname
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                alert('닉네임이 변경되었습니다.');
                onClose(); // 모달 닫기
                onRefreshPosts(); // 게시글 목록 갱신
            } else {
                alert('닉네임 변경 실패: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error updating nickname:', error);
            alert('닉네임 변경에 실패했습니다: ' + error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg z-100">
                <input
                    type="text"
                    value={currentNickname}
                    onChange={handleNicknameChange}
                // 기타 속성
                />
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        변경
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
