import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
    Typography, 
    Box,
    Grid } from "@material-ui/core";
import ProgressBar from '../ProgressBar/index.js';

const useStyles = makeStyles(theme=>({

    mainContainer: {
        background:"#2A2D34",
    },    
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"
    },    
    itemTitle: {
        textAlign: "center",
        maxWidth: "80%",
        margin: "auto",
        color: "white",
        padding: "0.5rem 0",
        fontWeight: "bold",
        align: "center",       
        lineHeight: 1,
        padding: "0.5rem 0 0.5rem",
    },
    progressBar: {
        height: "3rem",
        width: "100%",
        color: "#E5383B"
    }
}))




export default function SkillSection({ ...prop}) {
    const classes = useStyles();
    let skillSectionTitle = "Habilidades"
    return(
        <>  
            <Box className={classes.mainContainer} component="header">
            <Typography className={classes.heading} variant="h4" align="center">
                {skillSectionTitle}
            </Typography>
            <Grid container justify="center" alignItems="center">         
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Experience Cloud
                    </Typography>
                    <ProgressBar value="90" />
                </Grid>                
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Service Cloud
                    </Typography>
                    <ProgressBar value="90" />
                </Grid>         
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Sales Cloud
                    </Typography>
                    <ProgressBar  value="80" />
                </Grid>                
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Apex
                    </Typography>
                    <ProgressBar  value="90" />
                </Grid>         
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Lightning Flow
                    </Typography>
                    <ProgressBar value="80" />
                </Grid>                
                <Grid item xs={12} sm={6} md={6}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Lightning Web Components
                    </Typography>
                    <ProgressBar value="75" />
                </Grid>
            </Grid>  
            </Box>

        </>
    );
}