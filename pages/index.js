import Link from 'next/link'

function Home() {
    return (
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
    )
        
}

export default Home