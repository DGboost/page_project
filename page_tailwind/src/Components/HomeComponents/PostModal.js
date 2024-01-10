import React, { useState } from "react";

const PostModal = ({ post, onClose, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(post.text);

  const toggleEditMode = () => {
    if (editMode) {
      onEdit(editedText);
    }
    setEditMode(!editMode);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">{post.author} 게시글 작성자</h2>
          <button onClick={onClose} className="text-black font-bold">X</button>
        </div>

        {/* 이미지 표시 */}
        {post.imageUrl && (
          
          <img src={`http://52.79.240.233:5000/${post.imageUrl}`} alt="Post" className="mb-4 max-w-full h-auto" />
        )}

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
  );
};

export default PostModal;
