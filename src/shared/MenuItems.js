import React from "react";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"

const MenuItems = [
    {
        icon: <Home/>,
        label: "Home",
        labelEn: "Home",
        path: "/"
    },{
        icon: <AssignmentInd/>,
        label: "Portfolio",
        labelEn: "Portfolio",
        path: "/portfolio"
    },{
        icon: <Apps/>,
        label: "Blog",
        labelEn: "Blog",
        path: "/blog"
    },{
        icon: <ContactMail/>,
        label: "Contato",
        labelEN: "Contact",
        path: "/contact"
    }
];

export default MenuItems ;