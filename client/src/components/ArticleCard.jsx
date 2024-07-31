export default function ArticleCard({
    _id,
    title
}) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}