import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './HomeComponents/Header';
import WritePost from './HomeComponents/WritePost';
import PostList from './HomeComponents/PostList';
import UserProfile from './HomeComponents/UserProfile';
import PostForm from './HomeComponents/PostForm';
import PopularPosts from './HomeComponents/PopularPosts';
import Footer from './HomeComponents/Footer';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId'); // userId를 가져옵니다.
    const [posts, setPosts] = useState([]);
    const [showPostForm, setShowPostForm] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
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
        setShowPostForm(false); // 게시글 추가 후 폼 숨기기
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // 게시글 작성 폼 표시 상태를 전환하는 함수
    const togglePostForm = () => {
        setShowPostForm(!showPostForm);
    };
    // Home 컴포넌트 내부
    return (
        <div className="flex flex-col items-center pt-[80px] pb-0 px-0 relative bg-white">
            <Header />
            <WritePost onTogglePostForm={togglePostForm} />
            <div className="w-full">
                {showPostForm ? (
                    <PostForm
                        onPostAdded={handlePostAdded}
                        onClose={() => setShowPostForm(false)}
                        userId={userId}
                    />
                ) : (
                    <PostList posts={posts} />
                )}
            </div>
            <UserProfile handleLogout={handleLogout} />
            <PopularPosts />
            <Footer />
        </div>
    );
};

export default Home;
