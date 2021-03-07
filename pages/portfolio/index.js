import React from "react";
import Navbar from '../../src/components/Navbar/index.js';

/*
export const getStaticProps = async() => {
    let cmsResponse;
    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=certification&filter[status]=live&sort=updated_at", fetchParams); 
    const certificationList = await cmsResponse.json();
    
    cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=education&filter[status]=live&sort=updated_at", fetchParams);
    const educationList = await cmsResponse.json();



    return {
        props: {
            certifications: certificationList.data,
            educations: educationList.data
        },
    }
}
*/


export default function Portfolio(props)  {

    return(
        <>
        <Navbar/>
        <div>Em implementação!! ;)</div> 
        </>
    );
}