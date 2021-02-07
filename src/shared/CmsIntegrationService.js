class CmsService {

    constructor() {
    }

    async getData() {
        return ({
            articles: await this.getCmsByContentType('article'),
            certifications: await this.getCmsByContentType('certification'),
            experiences: await this.getCmsByContentType('experience'),
            institutionsCompanies: await this.getCmsByContentType('institution-company'),
            projects:  await this.getCmsByContentType('project'),
            publications: await this.getCmsByContentType('publication'),
            skills: await this.getCmsByContentType('skill'),
            technologies: await this.getCmsByContentType('technology')
        })
    }
    
    buildEndPointUrl(contentType) {
        return  "https://api.elegantcms.io/api/v1/contents?filter[type]="+contentType+"&filter[status]=live";
    }

    async getCmsByContentType(contentType) {
        console.log('>> getCmsData: Fetching '+contentType+ ' from CMS Database...');
        const apiSecret = process.env.CMS_API_SECRET;
    
        const fetchParams = {
            headers: {
                Authorization: `Token token=${apiSecret}`,
            }
        }
    
        const cmsResponse = await fetch(this.buildEndPointUrl(contentType), fetchParams); 
        const content = await cmsResponse.json();
        //console.log(content.data);
        return content.data;
    }



}
export default CmsService;