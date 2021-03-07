import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
    Typography, 
    Box,
    Grid } from "@material-ui/core";
import EducationItem from "../EducationItem/index.js";

const useStyles = makeStyles(theme=>({

    mainContainer: {
        background:"#2A2D34",
    },    
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"
    }
}))

export default function EducationSection({ ...props}) {
    const classes = useStyles();
    let educationSectionTitle = "Formação Acadêmica"
    return(
        <>  
            <Box className={classes.mainContainer} component="header">
            <Typography className={classes.heading} variant="h4" align="center">
                {educationSectionTitle}
            </Typography>
            <Grid container justify="center" alignItems="center">
                {props.educations.map(education => (
                    <Grid item xs={12} sm={6} md={6}>
                    <EducationItem
                        title={education.attributes.fields.title}
                        institutionName={education.attributes.fields.institutionname}
                        location={education.attributes.fields.location}
                        startDate={education.attributes.fields.startdate}
                        endDate={education.attributes.fields.enddate}
                    />                     
                </Grid>
                ))}
            </Grid>  
            </Box>

        </>
    );
}