import Link from 'next/link'
import Layout from "../components/Layout"

function LinkTree() {
    return (
        <Layout>
            <h1>Link Tree</h1>
            <div>
                
                <Link href="https://www.linkedin.com/in/matsfranco">  
                    <button label="LinkedIn" title="LinkedIn">LinkedIn</button>
                </Link>

            </div>
            <div>
                <Link href="https://www.github.com/matsfranco">  
                    <button label="GitHub" title="GitHub">GitHub</button>
                </Link>
            </div>
            <div>
                <Link  href="https://www.facebook.com/matsfranco">  
                    <button>Facebook</button>
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/mateussfranco">     
                    <button>Instagram</button>
                </Link>
            </div>
            <div>
                <Link href="https://twitter.com/matsfranco">  
                    <button>Twitter</button>
                </Link>
            </div>
            <div>
                <Link href="https://trailblazer.me/id/matsfranco">  
                    <button>Trailblazer.me</button>
                </Link>
            </div>
        </Layout>
    )
        
}

export default LinkTree