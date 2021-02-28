import Link from "next/link";
import styled from 'styled-components';
import { withRouter } from "next/router";

const VNavButton = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  .Label {
    font-size: 18px;
    font-weight: normal;
    text-transform: capitalize;
  }
  
  .active {
    color: ${({ theme }) => theme.colors.contrastText};
    border-bottom: 1px solid white;

  }

`;

const NavButton = props => (
    <VNavButton>
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
    </VNavButton>
  );
  
  export default withRouter(NavButton);