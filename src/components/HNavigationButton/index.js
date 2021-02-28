import Link from "next/link";
import styled from 'styled-components';
import { withRouter } from "next/router";

const NavButtonBase = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 100%;

  cursor: pointer;

  .Label {
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
  }
  
  .active {
    color: ${({ theme }) => theme.colors.contrastText};
    border-bottom: 2px solid white;

  }

`;

const NavButton = props => (
    <NavButtonBase>
    <Link href={props.path}>
      <div
        className={`NavButton ${
          props.router.pathname === props.path ? "active" : ""
        }`}
      >
        <div className="Icon">{props.icon}</div>
        <span className="Label">{props.label}</span>
      </div>
    </Link>
    </NavButtonBase>
  );
  
  export default withRouter(NavButton);