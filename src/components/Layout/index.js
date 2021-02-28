import Background from '../Background/index.js';
import Header from '../Header/index.js';
import styled from 'styled-components';
import Head from "next/head";


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

const Layout = props => {
    
    return(

            <Background> 
                <Head>
                    <title>Mateus Franco</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <Header/>
                <DefaultPageLayout>
                    {props.children}
                </DefaultPageLayout>
            </Background>    

             
    );
};
export default Layout;