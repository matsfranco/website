import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import Typed from "react-typed"

// CSS
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "#E5383B"
    },
    subtitle: {
        color: "#2A2D34",
        marginBottom: "3rem"
    },
    typedContainter : {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zInderx: 1
    }

}))


export default function Header() {
    const classes = useStyles();
    return(
        <Box className={classes.typedContainter}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src="https://media.elegantcms.io/a/b3f57686-a424-4e1a-9884-09f50e3f2495/bb0702fa-e359-48da-8642-5318c6a5a99d/1614816174/o/IMG-20191122-WA0025.jpg?1614816174" alt="Mateus Franco avatar"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Mateus Franco"]} typeSpeed={40} showCursor={false} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                    strings={["Salesforce Developer","Engenheiro de Computação","Maker"]} 
                    typeSpeed={35} 
                    backspeed={55}
                    loop/>
            </Typography>
        </Box>
    );
};