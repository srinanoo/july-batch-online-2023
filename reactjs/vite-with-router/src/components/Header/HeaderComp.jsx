import './Header.css';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <>
            <div className="flex">
                <div>
                    LOGO
                </div>
                <div>
                    {/* <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                        </ul>
                    </nav>
                    <br />
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </nav>
                    <br /> */}
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}