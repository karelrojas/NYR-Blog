import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'
import './Blogs.css'

export default function BlogPage() {
    const [blog, setBlog] = useState();
    const [recentBlogs, setRecentBlogs] = useState([]);
    const blogId = useParams();
    useEffect(() => {
        getCurrentBlog();
        getRecentBlogs();
    }, []);

    async function getCurrentBlog() {
        const res = await axios.get('http://localhost:8082/blogs/' + blogId.id);
        setBlog(res.data);
    }
    
    async function getRecentBlogs() {
        const res = await axios.get('http://localhost:8082/recent-blogs');
        setRecentBlogs(res.data);
    } 

    return (
        <div className="Blog-page">
            { blog != null && (
                <div className="Blog-article" >
                    <div className="Blog-header">
                        <div className="Blog-title">{blog.title}</div>
                        <div className="Blog-subtitle">{blog.subtitle}</div>
                    </div>
                    <div className="Blog-info">
                        <div className="Blog-author">By {blog.author}</div>
                        <div className="Blog-publishDate">Published on {blog.publishDate}</div>
                    </div>
                    <p className="Blog-body">{blog.body}</p>
                </div>
            )}
            <div className="Sidebar">
                <div className="Recent-blogs">
                    {recentBlogs.map((data, index) => (
                        <div className="Blog-small" key={index}>
                            <a href={"/blogs/" + data.id} className="Blog-link">
                                <div className="Blog-header">
                                    <div className="Blog-small-title">{data.title}</div>
                                    <div className="Blog-small-subtitle">{data.subtitle}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="History">
                    <div></div>
                </div>
            </div>
        </div>
    )
}