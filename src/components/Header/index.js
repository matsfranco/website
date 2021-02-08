import Link from "next/link";
import styled from 'styled-components';

const HeaderBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
  width: 100%;


  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  
  cursor: pointer;
`;

const HeaderLabel = styled.div`
    padding: 0 20px;
`; 

export default function Header() {
    return(
        <HeaderBase>
            <HeaderLabel>Mateus Franco</HeaderLabel>
        </HeaderBase>
    );
};