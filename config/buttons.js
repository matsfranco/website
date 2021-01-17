import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BookIcon from '@material-ui/icons/Book';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';

const navButtons = [
    {
        label: "Home",
        labelEn: "Home",
        path: "/",
        icon: <HomeIcon/>
    },{
        label: "Sobre",
        labelEn: "About",
        path: "/profile",
        icon: <AccountCircleIcon/>
    },{
        label: "Portfolio",
        labelEn: "Portfolio",
        path: "/portfolio",
        icon: <BusinessCenterIcon/>
    },{
        label: "Blog",
        labelEn: "Blog",
        path: "/blog",
        icon: <BookIcon/>
    },{
        label: "Contato",
        labelEN: "Contact",
        path: "/contato",
        icon: <MailIcon/>
    }
];

export default navButtons;