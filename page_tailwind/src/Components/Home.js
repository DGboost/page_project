import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './HomeComponents/Header';
import WritePost from './HomeComponents/WritePost';
import PostList from './HomeComponents/PostList';
import PostListCompact from './HomeComponents/PostListCompact';
import UserProfile from './HomeComponents/UserProfile';
import PostForm from './HomeComponents/PostForm';
import Footer from './HomeComponents/Footer';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [showPostForm, setShowPostForm] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            fetchPosts();
        }

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [navigate]);

    // 게시글 목록을 불러오는 함수
const fetchPosts = async (page, limit = 8) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/posts?page=${page}&limit=${limit}`, {
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
        setShowPostForm(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const togglePostForm = () => {
        setShowPostForm(!showPostForm);
    };

    return (
        <div className="flex flex-col items-center pt-[80px] pb-0 px-0 relative bg-white">
            <Header />
            <WritePost onTogglePostForm={togglePostForm} isWriting={showPostForm} />
            <div className="w-full">
                {showPostForm ? (
                    <PostForm onPostAdded={handlePostAdded} onRefreshPosts={fetchPosts} onClose={() => setShowPostForm(false)} />
                ) : windowWidth > 770 ? (
                    <PostList posts={posts} onRefreshPosts={fetchPosts} setCurrentPage={setCurrentPage} />
                ) : (
                    <PostListCompact posts={posts} onRefreshPosts={fetchPosts} />
                )}
            </div>
            <UserProfile handleLogout={handleLogout} onRefreshPosts={fetchPosts} />
            <Footer />
        </div>
    );
};

export default Home;
