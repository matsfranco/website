import Layout from '../../src/components/Layout/index.js';
import CertificationItem from '../../src/components/CertificationItem/index.js';

export const getStaticProps = async() => {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=certification&filter[status]=live", fetchParams); 
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

            <div>
                Certifications
                <br/>
            </div>
            <div>
                {props.certifications.map(certification => (
                    <div>
                        <CertificationItem 
                            title={certification.attributes.fields.title}
                            expeditor={certification.attributes.fields.expeditor}
                            expeditorIcon={certification.attributes.fields.expeditorIcon}
                            expeditionDate={certification.attributes.fields.expeditiondate}
                        />
                    </div>
                ))}
            </div>
            
        </Layout>
    );
}