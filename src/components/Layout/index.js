import Background from '../Background/index.js';
import Header from '../Header/index.js';
import NavBar from '../HNavigationBar/index.js';
import navItems from '../../shared/NavigationItems.js';
  
import Head from "next/head";
export default function Layout () {
    
    return(

            <Background> 
                <Head>
                    <title>Mateus Franco</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <Header></Header>
            </Background>    

             
    );
}