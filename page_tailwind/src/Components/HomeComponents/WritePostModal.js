import React, { useState } from 'react';
import axios from 'axios';

const WritePostModal = ({ isOpen, onClose, userId }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => setText(e.target.value);
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('text', text);
        if (image) {
            formData.append('image', image);
        }
        formData.append('userId', userId);
        try {
            const token = localStorage.getItem('token'); // JWT 토큰 가져오기
            await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // 토큰 포함
                }
            });
            alert('게시글이 성공적으로 등록되었습니다.'); // 성공 알림
            onClose();
        } catch (error) {
            console.error('Error posting:', error);
            alert('게시글 등록에 실패했습니다.'); // 실패 알림
        }
    };

    // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg z-100">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="내용을 입력하세요"
                />
                <input
                    className="mt-4"
                    type="file"
                    onChange={handleImageChange}
                />
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        className="bg-stone-400 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        게시하기
                    </button>
                    <button
                        className="bg-stone-400 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WritePostModal;