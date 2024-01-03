import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <div>Loading posts...</div>;
    }

    return (
        <div className="gap-[60px] px-[170px] py-[60px] overflow-hidden flex items-center justify-center relative self-stretch w-full">
            <div className="flex flex-col gap-[24px] flex-1 grow items-center relative">
                <div className="relative w-[520px] font-bold text-black text-[40px] text-center leading-[48px]">
                    게시글 목록
                </div>
                <div className="items-start px-0 py-[20px] flex justify-center gap-[40px] relative self-stretch w-full">
                    {posts.map(post => (
                        <PostItem
                            key={post._id} // 각 게시글의 고유 ID를 key로 사용
                            title={post.text?.substring(0, 5)}
                            author={post.nickname}
                            date={new Date(post.createdAt).toLocaleDateString()}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;