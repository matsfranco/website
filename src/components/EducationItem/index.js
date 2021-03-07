import { makeStyles } from '@material-ui/core/styles';
import { Box,Typography } from '@material-ui/core';
import dateFormat from 'dateformat';

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
        maxWidth: "24rem",
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

export default function ListItem(props) {
    const classes = useStyles();
  
    return (
        <>
            <Typography className={classes.itemTitle} variant="h6" align="center">
                {props.title}
            </Typography>            
            <Typography className={classes.itemContent} variant="body1" align="center">
                {props.institutionName}
            </Typography>
            <Typography className={classes.itemContent} variant="body1" align="center">
                {props.location}
            </Typography>
            <Typography className={classes.itemContent} variant="body1" align="center">
                {dateFormat(props.startDate,"mmm/yyyy")} -  {dateFormat(props.endDate,"mmm/yyyy")}
            </Typography>
        </>
  );
}