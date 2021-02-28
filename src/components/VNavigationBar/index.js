import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import navItems from '../../shared/NavigationItems.js';
import VNavButton from '../VNavigationButton/index.js';

const VNavBar = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondary};
    opacity:0.9;
    height: 45vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 2.5rem;
    left: 0;
    transition: transform 0.5s ease-in-out;

    @media (max-width: ${({ theme }) => theme.mobile.vNavBarMaxWidth}) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        padding: 2rem 0;
        color: ${({ theme }) => theme.colors.contrastText};
        text-decoration: none;
        transition: color 0.3s linear;
  
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
    }

}
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

const Menu = ({ open }) => {
  return (
    <VNavBar open={open}>
        {navItems.map(button => (
            <VNavButton
                key={button.path}
                path={button.path}
                label={button.label} />
        ))}
    </VNavBar>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;