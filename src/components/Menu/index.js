import NavButton from '../HNavigationButton/index.js';
import styled from 'styled-components';
import Burger from '../Burger/index.js';
import VNavBar from '../VNavigationBar/index.js';
import navItems from '../../shared/NavigationItems.js';
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

const HNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height:  45px;

    //background: ${({ theme }) => theme.colors.navbarBackground};

    //box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);

`;

function Menu() {

    const [open, setOpen] = useState(false);
    const isBreakpoint = useMediaQuery(600)
    return (
        <div>
            { isBreakpoint ? (
                <div>
                    <Burger open={open} setOpen={setOpen} />
                    <VNavBar open={open} setOpen={setOpen}/>
                </div>
            ) : (
                <div>
                    <HNavBar>
                    {navItems.map(button => (
                        <NavButton
                            key={button.path}
                            path={button.path}
                            label={button.label} />
                    ))}
                    </HNavBar>
                </div>
            )}
        </div>
    );
}

export default Menu;