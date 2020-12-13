import Link from 'next/link'

function LinkTree() {
    return (
        <div>
            <h1>Link Tree</h1>
            <div>
                <Link href="https://www.linkedin.com/in/matsfranco">  
                    <a>LinkedIn</a>
                </Link>
            </div>
            <div>
                <Link href="https://www.github.com/matsfranco">  
                    <a>GitHub</a>
                </Link>
            </div>
            <div>
                <Link  href="https://www.facebook.com/matsfranco">  
                    <a>Facebook</a>
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/mateussfranco">  
                    <a>Instagram</a>
                </Link>
            </div>
        </div>
    )
        
}

export default LinkTree