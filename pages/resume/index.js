import React from "react";
import Navbar from '../../src/components/Navbar/index.js';
import ExperienceSection from '../../src/components/ExperienceSection/index.js';
import LanguageSection from '../../src/components/LanguageSection/index.js';
import EducationSection from '../../src/components/EducationSection/index.js';
import SkillSection from '../../src/components/SkillSection/index.js';

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
    return(
        <>  
            <Navbar/>
            <EducationSection {...props}/>
            <LanguageSection/>
            <SkillSection />
            <ExperienceSection {...props}/>
 
        </>
    );

}