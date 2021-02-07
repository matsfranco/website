import Link from 'next/link'
import Layout from "../../components/Layout"
import CmsService from '../../src/shared/CmsIntegrationService';

function Blog() {
    let cms = new CmsService();
    cms.getData();
    return (
        <Layout>
            <h1>Blog</h1>
            <div>Em construção!</div>
            <Link  href="/">  
                <a>Voltar para Home</a>
            </Link>
        </Layout>
    )  
}

export default Blog