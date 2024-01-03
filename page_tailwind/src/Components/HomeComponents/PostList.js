import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostModal from './PostModal';
import axios from 'axios';

const PostList = ({ posts, onRefreshPosts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        console.log('Posts:', posts);
    }, [posts]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const handleDeletePost = async (postId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // 모달 닫기
            setSelectedPost(null);
            // 게시글 목록 최신화
            // 예: 부모 컴포넌트의 게시글 목록 갱신 함수 호출 또는 상태 업데이트
            onRefreshPosts();
        } catch (error) {
            console.error('게시글 삭제 오류', error);
            // 오류 처리
        }
    };

    const handleEditPost = (postId) => {
        // 게시글 수정 관련 로직
        // 예: 수정 폼을 표시하거나 수정 페이지로 네비게이션
        console.log("게시글 수정:", postId);
        // 여기에 수정을 위한 추가적인 로직을 구현합니다.
    };

    if (!posts || posts.length === 0) {
        return (<div className="flex justify-center items-center "> {/* Flexbox를 사용한 중앙 정렬 */}
            <div className="text-center font-bold text-[20px]"> {/* 텍스트 정렬 및 스타일링 */}
                Loading posts...
            </div>
        </div>
        );
    }

    return (
        <div className="px-4 md:px-[170px] py-[60px] overflow-hidden flex flex-col items-center justify-center relative w-full">
            <div className="font-bold text-black text-[40px] text-center leading-[32px] md:leading-[48px] mb-8">
                게시글 목록
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {posts.map(post => (
                    <div onClick={() => handlePostClick(post)} key={post._id} className="cursor-pointer">
                        <PostItem
                            title={post.text?.substring(0, 5)}
                            author={post.userId}
                            nick={post.nickname}
                            date={new Date(post.createdAt).toLocaleDateString()}
                        />
                    </div>
                ))}
            </div>
            {selectedPost && (
                <PostModal
                    post={selectedPost}
                    onClose={handleCloseModal}
                    onDelete={() => handleDeletePost(selectedPost._id)}
                    onEdit={() => handleEditPost(selectedPost._id)}
                />
            )}
        </div>
    );
};

export default PostList;
