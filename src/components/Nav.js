import { Link } from 'react-router-dom';

const Nav=()=>{
    return (
        <header>
            <nav className="navBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;