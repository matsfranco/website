import Layout from '../../src/components/Layout/index.js';
import Certifications from '../../src/components/Certifications/index.js';

export const getStaticProps = async() => {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=certification&filter[status]=live&sort=updated_at", fetchParams); 
    const certificationList = await cmsResponse.json();
    
    return {
        props: {
            certifications: certificationList.data,
        },
    }
}

export default function Portfolio(props)  {

    return(
        <Layout>
            <Certifications {...props}/>
        </Layout>
    );
}