import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const portfolioCards = [
    {   
        cardName: "Profissional",
        imgTitle: "Dia de integração na Localiza",
        cardText: "Projetos em que participei nas empresas em que tive oportunidade de trabalhar",
        path: "/portfolio/professional",
        imagePath: "./static/images/professional_card_cover.png",
        imageAlt:"Boneco de pelúcia do Astro, mascote da Salesforce, junto a uma garrafa térmica da Localiza"
    },{
        cardName: "Acadêmico",
        imgTitle: "Adaptative Line Follower",
        cardText: "Projetos de graduação, pesquisa e extensão ao longo da minha formação na UNIFESP",
        path: "/portfolio/academic",
        imagePath: "./static/images/academic_card_cover.png",
        imageAlt:"Robô do tipo seguidor de linha com duas rodas com um monitor ao fundo"
    }
];

export default portfolioCards;