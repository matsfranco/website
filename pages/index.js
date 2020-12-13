import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Em construção!</h1>
            <Link href="/link-tree">
                <a>Link Tree</a>
            </Link>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </div>
    )
        
}

export default Home