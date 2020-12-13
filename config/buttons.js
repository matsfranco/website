import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserCircle,
  faBook,
  faEnvelope,
  faLink
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        label: "Perfil",
        path: "/profile",
        icon: <FontAwesomeIcon icon={faUserCircle} />
    },{
        label: "Portfolio",
        path: "/portfolio",
        icon: <FontAwesomeIcon icon={faBriefcase} />
    },{
        label: "Blog",
        path: "/blog",
        icon: <FontAwesomeIcon icon={faBook} />
    },{
        label: "Contato",
        path: "/contato",
        icon: <FontAwesomeIcon icon={faEnvelope} />
    },{
        label: "Link Tree",
        path: "/link-tree",
        icon: <FontAwesomeIcon icon={faLink} />
    }
];

export default navButtons;