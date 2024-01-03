import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostModal from './PostModal';

const PostList = ({ posts }) => {
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

    if (!posts || posts.length === 0) {
        return <div>Loading posts...</div>;
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
                />
            )}
        </div>
    );
};

export default PostList;
