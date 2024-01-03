import React, { useState } from "react";

const PostModal = ({ post, onClose, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false); // 편집 모드 상태
  const [editedText, setEditedText] = useState(post.text); // 편집된 텍스트

  const toggleEditMode = () => {
    if (editMode) {
      // 변경 사항 저장 로직
      onEdit(editedText);
    }
    setEditMode(!editMode); // 편집 모드 전환
  };

  return (
    <>
      {/* 모달 배경 */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40">
        {/* 모달 창 */}
        <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">{post.author} 게시글 작성자</h2>
            <button onClick={onClose} className="text-black font-bold">
              X
            </button>
          </div>
          {editMode ? (
            <textarea
              className="w-full p-2 border"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <div>내용: {post.text}</div>
          )}
          <div className="flex justify-end space-x-2 mt-4">
            <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              게시글 삭제
            </button>
            <button onClick={toggleEditMode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {editMode ? "변경 저장" : "게시글 수정"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
