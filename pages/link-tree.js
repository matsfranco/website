import Link from 'next/link'
import Layout from "../components/Layout"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function LinkTree() {

    
    const classes = useStyles();

    return (
        <Layout>
            <Typography variant='h3'>Redes Sociais</Typography>
            <div class={classes.root}>
                <Link  href="https://www.facebook.com/matsfranco">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<FacebookIcon/>}>Facebook</Button>
                </Link>
            </div>
            <div class={classes.root}>
                <Link href="https://www.github.com/matsfranco">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<GitHubIcon/>}>GitHub</Button>
                </Link>
            </div>
            <div class={classes.root}>
                <Link href="https://www.instagram.com/mateussfranco">     
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<InstagramIcon/>}>Instagram</Button>
                </Link>
            </div>
            <div class={classes.root}>
                <Link href="https://www.linkedin.com/in/matsfranco">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<LinkedInIcon/>}>LinkedIn</Button>
                </Link>

            </div>
            <div class={classes.root}>
                <Link href="https://trailblazer.me/id/matsfranco">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<FilterHdrIcon/>}>Trailbazer Community</Button>
                </Link>
            </div>
            <div class={classes.root}>
                <Link href="https://twitter.com/matsfranco">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<TwitterIcon/>}>Twitter</Button>
                </Link>
            </div>
            <div class={classes.root}>
                <Link href="https://www.youtube.com/channel/UCG6cqFRh5lsIJmpTLPeWw3Q">  
                    <Button 
                        variant="contained" 
                        color="default" 
                        size="large"
                        startIcon={<YouTubeIcon/>}>YouTube</Button>
                </Link>
            </div>
        </Layout>
    )
        
}

export default LinkTree