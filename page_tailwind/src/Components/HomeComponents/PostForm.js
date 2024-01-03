import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostAdded, onClose, userId }) => {
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
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status >= 200 && response.status < 300) {
                alert('게시글이 성공적으로 등록되었습니다.');
                onPostAdded(); // 게시글 추가 후 목록 업데이트 및 폼 닫기
            }
        } catch (error) {
            console.error('Error posting:', error);
            alert('게시글 등록에 실패했습니다.');
            onClose();
        }
    };

    return (
        <div className="px-4 md:px-[170px] py-[60px] overflow-hidden flex flex-col items-center justify-center relative w-full">
            <div className="font-bold text-black text-[40px] text-center leading-[32px] md:leading-[48px] mb-8">
                게시글 작성
            </div>
            <div className="flex flex-col md:flex-row w-full items-center">
                <textarea
                    className="flex-1 p-2 border border-gray-300 rounded mb-4 md:mb-0 md:mr-4"
                    placeholder="내용을 입력하세요"
                    value={text}  // 여기서 text로 변경
                    onChange={handleTextChange}  // 이벤트 핸들러도 handleTextChange로 변경
                />
                <div className="flex flex-col items-center w-full md:w-auto">
                    <input
                        className="mb-4"
                        type="file"
                        onChange={handleImageChange}  // 이미지 변경 핸들러 추가
                    />
                    <button
                        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60"
                        onClick={handleSubmit}
                    >
                        제출
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-60"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
