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
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // JWT 토큰 확인
        const token = localStorage.getItem('token');
        if (!token) {
            // 토큰이 없으면 로그인 페이지로 리디렉션
            navigate('/login');
        } else {
            // 토큰이 있으면 게시글 목록을 가져옵니다
            fetchPosts();
        }
    }, [navigate]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handlePostAdded = () => {
        fetchPosts();
    };

    const handleLogout = () => {
        // 로그아웃 처리
        localStorage.removeItem('token');
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