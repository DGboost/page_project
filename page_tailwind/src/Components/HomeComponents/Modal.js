// Modal.js
import React from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, currentNickname, setCurrentNickname }) => {

    const handleNicknameChange = (e) => {
        setCurrentNickname(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // 중복 닉네임 검사 추가 (가정)
            const checkResponse = await axios.get('http://localhost:5000/api/check-nickname', {
                params: { nickname: currentNickname },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (checkResponse.data.isDuplicate) {
                alert('이미 사용 중인 닉네임입니다.');
                return;
            }

            // ... 이전의 닉네임 변경 요청 로직
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
                    className="border border-gray-300 rounded p-2 w-full"
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
