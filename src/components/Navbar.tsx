import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 15px;

  &.active {
    font-weight: bold;
  }

  &:hover {
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
