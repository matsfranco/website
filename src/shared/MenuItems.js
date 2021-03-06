import React from "react";
import {
    AssignmentInd,
    Home,
    Book,
    ContactMail,
    Work
} from "@material-ui/icons"

const MenuItems = [
    {
        icon: <Home/>,
        label: "Home",
        labelEn: "Home",
        path: "/"
    },{
        icon: <Work/>,
        label: "Currículo",
        labelEN: "Resume",
        path: "/resume"
    },{
        
        icon: <AssignmentInd/>,
        label: "Portfolio",
        labelEn: "Portfolio",
        path: "/portfolio"
    },{
        icon: <Book/>,
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