import { Link } from "react-router-dom";

export default function ArticleCard({
    _id,
    title
}) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <h3>{title}</h3>
                    <Link to={`/articles/${_id}/details`}>Details </Link>
                </div>
            </div>
        </>
    )
}