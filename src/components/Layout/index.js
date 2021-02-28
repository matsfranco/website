import Background from '../Background/index.js';
import Header from '../Header/index.js';
  
import Head from "next/head";
const Layout = props => {
    
    return(

            <Background> 
                <Head>
                    <title>Mateus Franco</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <Header></Header>
                <div className="Content">{props.children}</div>
            </Background>    

             
    );
};
export default Layout;