async function getCmsData(request, response) {

    response.json({
        articles: await getCmsByContentType('article'),
        certifications: await getCmsByContentType('certification'),
        experiences: await getCmsByContentType('experience'),
        institutionsCompanies: await getCmsByContentType('institution-company'),
        projects:  await getCmsByContentType('project'),
        publications: await getCmsByContentType('publication'),
        skills: await getCmsByContentType('skill'),
        technologies: await getCmsByContentType('technology')
    })

}

async function getCmsByContentType(contentType) {
    
    const apiSecret = process.env.CMS_API_SECRET;

    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch(buildEndPointUrl(contentType), fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content.data;
}

function buildEndPointUrl(contentType) {
    return  "https://api.elegantcms.io/api/v1/contents?filter[type]="+contentType+"&filter[status]=live";
}

export default getCmsData