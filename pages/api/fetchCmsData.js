async function getCmsData(request, response) {
    

    let articles = await getCmsArticles();
    let projects = await getCmsProjects();
    let experiences = await getCmsExperiences();
    let institutionsCompanies = await getCmsInstitutionsCompanies();
    let skills = await getCmsSkills(); 
    let technologies = await getCmsTechnologies();
    let publications = await getCmsPublications();
    let certifications = await getCmsCertifications();


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

async function getCmsArticles() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=article&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsProjects() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=project&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsExperiences() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=experience&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsInstitutionsCompanies() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=institution-company&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsSkills() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=skill&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsTechnologies() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=technology&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsPublications() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=publication&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

async function getCmsCertifications() {

    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents?filter[type]=certification&filter[status]=live", fetchParams); 
    const content = await cmsResponse.json();

    console.log((content.data).length);
    for(let i = 0;i < (content.data).length;i++) {
        console.log('['+content.data[i].id+'] '+content.data[i].attributes.title);
    }

    return content;
}

export default getCmsData