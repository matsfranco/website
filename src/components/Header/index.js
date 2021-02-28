import Link from "next/link";
import styled from 'styled-components';
import NavBar from '../Menu/index.js';
import navItems from '../../shared/NavigationItems.js';

const HeaderBase = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  height: 40px;
  width: 100%;


  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

const HeaderLabel = styled.div`
    padding: 0 20px;
    width: 100%;
`;



export default function Header() {
    return(
        <HeaderBase>
                <HeaderLabel>
                    Mateus Franco
                </HeaderLabel>
                <NavBar/>
        </HeaderBase>
    );
};