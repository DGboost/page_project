import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './HomeComponents/Header';
import WritePost from './HomeComponents/WritePost';
import PostList from './HomeComponents/PostList';
import UserProfile from './HomeComponents/UserProfile';
import PopularPosts from './HomeComponents/PopularPosts';
import Footer from './HomeComponents/Footer';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // 게시글 목록 상태

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            fetchPosts(); // 게시글 목록 가져오기
        }
    }, [navigate]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Fetched posts:', response.data); // 데이터 확인
            setPosts(response.data); // 게시글 데이터 설정
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

     // 게시글 추가 후 게시글 목록 업데이트
    const handlePostAdded = () => {
        fetchPosts();
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직
        localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거

        // 로그인 페이지로 리디렉션
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center pt-[80px] pb-0 px-0 relative bg-white">
            <Header />
            <WritePost onPostAdded={handlePostAdded} />
            <PostList posts={posts} />
            <UserProfile handleLogout={handleLogout} />
            <PopularPosts />
            <Footer />
        </div>
    );
};

export default Home;