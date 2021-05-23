import React from "react";
import Navbar from '../../src/components/Navbar/index.js';
import ExperienceSection from '../../src/components/ExperienceSection/index.js';
import LanguageSection from '../../src/components/LanguageSection/index.js';
import EducationSection from '../../src/components/EducationSection/index.js';
import SkillSection from '../../src/components/SkillSection/index.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));


export const getStaticProps = async() => {
    let cmsResponse;
    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=experience&filter[status]=live&sort=-updated_at", fetchParams); 
    const experienceList = await cmsResponse.json();

    cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=education&filter[status]=live&sort=-updated_at", fetchParams);
    const educationList = await cmsResponse.json();

    return {
        props: {
            experiences: experienceList.data,
            educations: educationList.data
        },
    }
}

export default function Resume(props) {
    const classes = useStyles();
    return(
        <>  
            <Navbar/>
            <div className={classes.root}>
            <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start" >
                <Grid item xs={12} sm={6}>
                    <ExperienceSection {...props}/>
                </Grid>
                <Grid item  xs={12} sm={6}>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start" >
                        <Grid item xs={12}>
                            <EducationSection {...props}/>
                        </Grid>
                        <Grid item xs={12}>
                            <LanguageSection/>
                        </Grid>
                        <Grid item xs={12}>
                            <SkillSection />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </>
    );

}