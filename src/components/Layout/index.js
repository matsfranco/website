import Header from '../Header/index.js';
import Head from "next/head";
import Navbar from '../Navbar/index.js';
/*
const DefaultPageLayout = styled.div`
    
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 20px;
    //border: 1px solid white;
    color: ${({ theme }) => theme.colors.contrastText};
    .a {
      color: inherit;
    }
`;
*/



const Layout = props => {
    return(

            <>          
                <div>
                    {props.children}
                </div>
            </>    

             
    );
};
export default Layout;