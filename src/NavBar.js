import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/timer">
                        Timer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">
                        Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;