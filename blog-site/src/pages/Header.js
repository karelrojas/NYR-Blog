import './Header.css'

export default function Header() {
    return (
        <div className="Header">
            <div className="Title">
                <a href="/" className="Link Title-page">The Garden Plot</a>
            </div>
            <div className="Page-links">
                <a href="/blogs" className="Link 1">Blogs</a>
            </div>
        </div>
    )
}