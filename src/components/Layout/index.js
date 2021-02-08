import Background from '../Background/index.js';
import Header from '../Header/index.js';
import NavBar from '../NavigationBar/index.js';
import navItems from '../../shared/NavigationItems.js';

export default function Layout () {
    
    return(
        <Background>
            <Header></Header>
            <NavBar navButtons={navItems}/>
        </Background>      
    );
}