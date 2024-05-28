import { useState, useEffect } from 'react';
import axios from 'axios'
import './Blogs.css'

export default function Blogs() {
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getRecentBlogs();
        getAllBlogs();
    }, []);
    
    async function getRecentBlogs() {
        const res = await axios.get('http://localhost:8082/recent-blogs');
        setRecentBlogs(res.data);
    } 

    async function getAllBlogs() {
        const res = await axios.get('http://localhost:8082/blogs');
        setBlogs(res.data);
    }

    return (
        <div className="Blog-page">
            <div className="Blogs">
                
                {blogs.map((data, index) => (
                    <div className="Blog-article" key={index}>
                    <div className="Blog-header">
                        <div className="Blog-title">{data.title}</div>
                        <div className="Blog-subtitle">{data.subtitle}</div>
                    </div>
                    <div className="Blog-info">
                        <div className="Blog-author">By: {data.author}</div>
                        <div className="Blog-publishDate">{data.publishDate}</div>
                    </div>
                    <div className="Blog-body">{data.body}</div>
                    </div>
                ))}
            </div>
            <div className="Sidebar">
                <div className="Recent-blogs">
                    {recentBlogs.map((data, index) => (
                        <div className="Blog-small" key={index}>
                            <div className="Blog-header">
                                <div className="Blog-small-title">{data.title}</div>
                                <div className="Blog-small-subtitle">{data.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="History">
                    <div>Blogs history with calendar go here</div>
                </div>
            </div>
        </div>
        
    )
}
