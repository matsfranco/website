import React, { useState } from "react";
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenySlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    Menu
} from "@material-ui/icons"
import menuItems from '../../shared/MenuItems.js';


//  CSS Styles
const useStyles = makeStyles(theme=>({

    sliderMenuContainer: {
        width: 250,
        background: '#2A2D34',
        height: "100%"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    menuItemText: {
        color: "white"
    }

}))

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };
    
    const classes = useStyles();

    const slideList = slider => (
    <Box 
        className={classes.sliderMenuContainer} 
        component="div"
        onClick={toggleSlider(slider,false)}
    >
        <Avatar className={classes.avatar} src="https://media.elegantcms.io/a/b3f57686-a424-4e1a-9884-09f50e3f2495/bb0702fa-e359-48da-8642-5318c6a5a99d/1614816174/o/IMG-20191122-WA0025.jpg?1614816174" alt="Mateus Franco avatar"/>
        <Divider/>
        <List>
            {menuItems.map((menuItem, key) => (
                <Link href={menuItem.path}>
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.menuItemText}>{menuItem.icon}</ListItemIcon>
                        <ListItemText className={classes.menuItemText} primary={menuItem.label}/>
                    </ListItem>
                </Link>
            ))}
        </List>
    </Box>
    )
    return(
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#e5383b" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>
                            <Menu style={{ background:"#e5383b" }}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "white"}}>MATEUS FRANCO</Typography>
                    </Toolbar>
                    <MobilRightMenySlider open={state.right} anchor="left" onClose={toggleSlider("right",false)}>
                        {slideList("right")}
                    </MobilRightMenySlider>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar