import React from "react";
import Navbar from '../../src/components/Navbar/index.js';
import ExperienceSection from '../../src/components/ExperienceSection/index.js';

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
    return {
        props: {
            experiences: experienceList.data
        },
    }
}

export default function Resume(props) {
    return(
        <>  
            <Navbar/> 
            <ExperienceSection {...props}/>
           
        </>
    );

}