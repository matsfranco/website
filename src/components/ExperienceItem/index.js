import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import dateFormat from 'dateformat'

const useStyles = makeStyles(theme=>({

    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid white",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                maring: "1rem",
                borderColor: "white"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "60%",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "white",
        background: "#E5383B",
        lineHeight: 1,
        padding: "0.5rem 0 0.5rem",
        "&:before": {
            display: "none"  
        },
        [theme.breakpoints.up("md")]: {
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before": {
                display:"none"
            }
        }
    },
    itemHeading: {
        color: "white",
        padding: 0,
    },    
    itemContent: {
        color: "white",
        padding: 0,
    }

}));

// Translate original DateTime namings from English
function translateDateTimeLabestoPortuguese() {
    let dateFormat = require("dateformat");
    dateFormat.i18n = {
    dayNames: [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ],
    monthNames: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ],
    };
}

export default function ExperienceItem({title,subtitle,startDate,endDate,description  }) {
    const classes = useStyles();
    translateDateTimeLabestoPortuguese();
    return(
        <>  
            <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
            {title}
            </Typography>
            <Box component="div" >
                <Typography className={classes.itemContent} variant="body1" >
                    {subtitle}
                </Typography>                            
                <Typography className={classes.itemContent} variant="subtitle1" >
                    {dateFormat(startDate,"mmm yyyy")} - {dateFormat(endDate,"mmm yyyy")} 
                </Typography>
                <Typography className={classes.itemContent} variant="body3" >
                    <div dangerouslySetInnerHTML={{__html:description}}></div>  
                </Typography>                                          
            </Box>
        </>
    );

}