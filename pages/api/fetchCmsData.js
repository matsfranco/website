async function getCmsData(request, response) {

    let articles = await getCmsByContentType('article');
    let projects = await getCmsByContentType('project');
    let experiences = await getCmsByContentType('experience');
    let institutionsCompanies = await getCmsByContentType('institution-company');
    let skills = await getCmsByContentType('skill'); 
    let technologies = await getCmsByContentType('technology');
    let publications = await getCmsByContentType('publication');
    let certifications = await getCmsByContentType('certification');

    response.json({
        articles: articles.data,
        certifications: certifications.data,
        experiences: experiences.data,
        institutionsCompanies: institutionsCompanies.data,
        projects: projects.data,
        publications: publications.data,
        skills: skills.data,
        technologies: technologies.data,
    })

}

async function getCmsByContentType(contentType) {
    
    const apiSecret = process.env.CMS_API_SECRET;

    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]="+contentType+"&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

function buildEndPointUrl(contentType) {
    let baseUrl = "https://api.elegantcms.io/api/v1/contents?filter[type]="+contentType+"&filter[status]=live";
}

export default getCmsData