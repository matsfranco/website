import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import ExperienceItem from "../ExperienceItem/index.js";

const useStyles = makeStyles(theme=>({

    mainContainer: {
        background:"#2A2D34",
    },
    timeLine: {
        position: "relative",
        padding: "0rem", 
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
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"
    }
}));

export default function ExperienceSection({...props}) {
    const classes = useStyles();
    let timeLineTitle = "Experiências"
    return(
        <>  
            <Box className={classes.mainContainer} component="header">
                <Typography className={classes.heading} variant="h4" align="center">
                    {timeLineTitle}
                </Typography>
                <Box component="div">
                        <Box component="div"></Box>
                        {props.experiences.map(experience => (
                            <ExperienceItem
                                title={experience.attributes.fields.title}
                                subtitle={experience.attributes.fields.institutioncompany[0].title}
                                startDate={experience.attributes.fields.startdate}
                                endDate={experience.attributes.fields.enddate}
                                description={experience.attributes.fields.description}
                            />                     
                        ))}
                </Box>
            </Box>          
        </>
    );

}