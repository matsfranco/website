import Background from '../Background/index.js';
import Header from '../Header/index.js';
import styled from 'styled-components';
import Head from "next/head";


const DefaultPageLayout = styled.div`
    color: ${({ theme }) => theme.colors.contrastText};
    display: flex;
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 20px;

    border: 1px solid white;
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