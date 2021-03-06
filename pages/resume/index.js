import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from '../../src/components/Navbar/index.js';
import Header from '../../src/components/Header/index.js';

const useStyles = makeStyles(theme=>({

    mainContainer: {
        background:"#2A2D34",
    },
    timeLine: {
        position: "relative",
        padding: "1rem", 
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #E5383B",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
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
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "white",
        background: "#E5383B",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
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
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"

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


const Resume = () => {
    const classes = useStyles();
    return(
        <>  
            <Navbar/> 
            <Box className={classes.mainContainer} component="header">
                <Typography className={classes.heading} variant="h4" align="center">
                    Currículo
                </Typography>
                <Box className={classes.timeLine} component="div">
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
                    2019
                    </Typography>
                    <Box className={classes.timeLineItem} component="div" >
                        <Typography className={classes.itemHeading} variant="h5" >
                            Engenheiro de Suporte ao Cliente
                        </Typography>
                        <Typography className={classes.itemContent} variant="body1" >
                            Embraer SA
                        </Typography>                            
                        <Typography className={classes.itemContent} variant="subtitle1" >
                            Lorem ipsum dolor sit amet teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste ...
                        </Typography>                            
                    </Box>
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2"> 
                    2020
                    </Typography>
                    <Box className={classes.timeLineItem} component="div" >
                        <Typography className={classes.itemHeading} variant="h5" >
                            Engenheiro de Suporte ao Cliente
                        </Typography>
                        <Typography className={classes.itemContent} variant="body1" >
                            Embraer SA
                        </Typography>                            
                        <Typography className={classes.itemContent} variant="subtitle1" >
                            Lorem ipsum dolor sit amet teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste ...
                        </Typography>                            
                    </Box>
                </Box>                                
            </Box>
           
        </>
    );

};

export default Resume;