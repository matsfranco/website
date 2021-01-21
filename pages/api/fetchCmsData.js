async function getCmsData(request, response) {
    
    const apiSecret = process.env.CMS_API_SECRET;
    
    const fetchParams = {
        headers: {
            Authorization: `Token token=${apiSecret}`,
        }
    }

    const cmsResponse = await fetch("https://api.elegantcms.io/api/v1/contents", fetchParams);

    const posts = await cmsResponse.json();

    response.json({
        posts: posts
    })

}

export default getCmsData