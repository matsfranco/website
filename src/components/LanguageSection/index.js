import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { 
    Typography, 
    Box,
    Grid } from "@material-ui/core";

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
        maxWidth: "10rem",
        margin: "auto",
        color: "white",
        padding: "0.5rem 0",
        fontWeight: "bold",
        align: "center",        
        borderBottom: "2px solid white",        
        background: "#E5383B",
        lineHeight: 1,
        padding: "0.5rem 0 0.5rem",
    },   
    itemContent: {
        color: "white",
        padding: "0.3rem 0 0 0"
    }
}))

export default function LanguageSection({ ...props}) {
    const classes = useStyles();
    let laguageSectionTitle = "Idiomas"
    return(
        <>  
            <Box className={classes.mainContainer} component="header">
            <Typography className={classes.heading} variant="h4" align="center">
                {laguageSectionTitle}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={4} md={4}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                        Português
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Escrita - Nativo
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Leitura - Nativo
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Fala - Nativo
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Inglês
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Escrita - Avançado
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Leitura - Avançado
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Fala - Avançado
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography className={classes.itemTitle} variant="h6" align="center">
                    Espanhol
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Escrita - Básico
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Leitura - Básico
                    </Typography>
                    <Typography className={classes.itemContent} variant="body1" align="center">
                        Fala - Básico
                    </Typography>
                </Grid>
            </Grid>  
            </Box>

        </>
    );
}