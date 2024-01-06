import React, { useState } from 'react';
import PostItem from './PostItem';
import PostModal from './PostModal';
import axios from 'axios';

const PostList = ({ posts, onRefreshPosts }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const handleDeletePost = async (postId) => {
        try {
            console.log('Deleting post...');
            const token = localStorage.getItem('token');
            await axios.delete(`http://54.180.100.241:5000/api/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Post deleted, refreshing posts...');
            await onRefreshPosts(currentPage, postsPerPage);
            console.log('Posts refreshed');
            setSelectedPost(null);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEditPost = async (postId, editedText) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://54.180.100.241:5000/api/posts/${postId}`, { text: editedText }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setSelectedPost(null);
            await onRefreshPosts(currentPage, postsPerPage);
        } catch (error) {
            console.error('게시글 수정 오류', error);
        }
    };

    // 페이지 변경 핸들러
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        onRefreshPosts(newPage, 8);
    };

    return (
        <div className="px-4 md:px-[170px] py-[60px] overflow-hidden flex flex-col items-center justify-center relative w-full">
            <div className="font-bold text-black text-[40px] text-center leading-[32px] md:leading-[48px] mb-8">
                게시글 목록
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {posts.map(post => (
                    <div key={post._id} onClick={() => handlePostClick(post)} className="cursor-pointer">
                        <PostItem
                            title={post.text?.substring(0, 5)}
                            author={post.userId}
                            nick={post.nickname}
                            date={new Date(post.createdAt).toLocaleDateString()}
                            imageUrl={post.imageUrl}
                        />
                    </div>
                ))}
            </div>
            {selectedPost && (
                <PostModal
                    post={selectedPost}
                    onClose={handleCloseModal}
                    onDelete={() => handleDeletePost(selectedPost._id)}
                    onEdit={(editedText) => handleEditPost(selectedPost._id, editedText)}
                />
            )}
            {/* 페이지네이션 컨트롤 */}
            <div className="pagination flex justify-center mt-4">
                {currentPage > 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="mx-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        이전
                    </button>
                )}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="mx-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    다음
                </button>
            </div>
        </div>
    );
};

export default PostList;
