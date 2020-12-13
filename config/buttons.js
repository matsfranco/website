import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BookIcon from '@material-ui/icons/Book';
import MailIcon from '@material-ui/icons/Mail';
import LinkIcon from '@material-ui/icons/Link';

const navButtons = [
    {
        label: "Perfil",
        path: "/profile",
        icon: <AccountCircleIcon/>
    },{
        label: "Portfolio",
        path: "/portfolio",
        icon: <BusinessCenterIcon/>
    },{
        label: "Blog",
        path: "/blog",
        icon: <BookIcon/>
    },{
        label: "Contato",
        path: "/contato",
        icon: <MailIcon/>
    },{
        label: "Links",
        path: "/link-tree",
        icon: <LinkIcon/>
    }
];

export default navButtons;