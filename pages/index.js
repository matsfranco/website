import Link from 'next/link'
import Layout from "../components/Layout"

function Home() {
    return (
        <Layout>
        <div>
            <h1>Em construção!</h1>
            <div>
                <Link href="/link-tree">
                    <a>Link Tree</a>
                </Link>  
            </div>
            <div>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </div>
        </div>
        </Layout>
        
    )
        
}

export default Home