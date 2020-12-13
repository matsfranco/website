import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Portfolio",
    path: "/portfolio",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Sobre",
    path: "/sobre",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Blog",
    path: "/blog",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Contato",
    path: "/contato",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;