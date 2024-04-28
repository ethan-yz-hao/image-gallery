import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background: #fff;
    color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(NavLink)`
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;

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
