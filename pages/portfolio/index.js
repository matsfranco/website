import Layout from '../../src/components/Layout/index.js';
import CertificationList from '../../src/components/CertificationList/index.js';
import EducationList from '../../src/components/EducationList/index.js';

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
    
    cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=experience&filter[status]=live&sort=updated_at", fetchParams);
    const experienceList = await cmsResponse.json();


    
    return {
        props: {
            certifications: certificationList.data,
            experiences: experienceList.data
        },
    }
}



export default function Portfolio(props)  {

    return(
        <Layout>
            <EducationList {...props}/>
            <CertificationList {...props}/>
        </Layout>
    );
}