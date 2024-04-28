import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: 45px;
    z-index: 10;
    background: #fff;
    color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

const NavItem = styled(NavLink)`
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;

    &.active {
        font-weight: bold;
        color: #e60023;
    }

    &:hover {
        color: #e60023;
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <div>
                <NavItem to="/" end>Home</NavItem>
                <NavItem to="/about">About</NavItem>
            </div>
        </Nav>
    );
};

export default Navbar;
