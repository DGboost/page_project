import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import PostModal from './PostModal';
import axios from 'axios';

const PostListCompact = ({ posts, onRefreshPosts }) => {
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

    const handleEditPost = async (postId, editedText) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/posts/${postId}`,
                { text: editedText }, // 여기에서 수정된 텍스트를 전송합니다.
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            onRefreshPosts(); // 게시글 목록 갱신
            handleCloseModal(); // 모달 닫기
        } catch (error) {
            console.error('게시글 수정 오류', error);
            // 오류 처리
        }
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
            <div className="w-full">
                {posts.map((post, index) => (
                    <div onClick={() => handlePostClick(post)} key={post._id} className="cursor-pointer">
                        <ListItem
                            title={post.text?.substring(0, 5)}
                            nick={post.nickname}
                            date={new Date(post.createdAt).toLocaleDateString()}
                        />
                        {index === 2 && (
                            <div onClick={() => {/* 여기에 전체 글보기 클릭 로직 추가 */ }} className="cursor-pointer">
                                <ListItem
                                    title="전체 글보기"
                                    isAllPostsItem={true}
                                />
                            </div>
                        )}
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
        </div>
    );
};

export default PostListCompact;
