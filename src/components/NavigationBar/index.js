import NavButton from '../NavigationButton/index.js';
import styled from 'styled-components';
import Burger from '../Burger/index.js';
import Menu from '../Menu/index.js';
import React, { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };



const NavigationBarBase = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:  45px;
    width: 100%;

    background: ${({ theme }) => theme.colors.navbarBackground};

    //box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);

    a {
        color: inherit;
        text-decoration: none;
        background: ${({ theme }) => theme.colors.secondary};
    }
`;

function NavBar(props) {

    const [open, setOpen] = useState(false);
    const isBreakpoint = useMediaQuery(500)
    return (
        <div>
            { isBreakpoint ? (
                <div>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            ) : (
                <div>
                    <NavigationBarBase>
                    {props.navButtons.map(button => (
                        <NavButton
                            key={button.path}
                            path={button.path}
                            label={button.label} />
                    ))}
                    </NavigationBarBase>
                </div>
            )}
        </div>
    );
}

export default NavBar;