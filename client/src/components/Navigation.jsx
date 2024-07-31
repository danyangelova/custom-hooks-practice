import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/articles"><li>Articles</li></Link>
                </ul>
            </nav>
        </>
    )
}