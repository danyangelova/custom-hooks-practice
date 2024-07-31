import Spinner from "./Spinner"
import ArticleCard from "./ArticleCard"

import { useFetch } from "../hooks/useFetch"


export default function ArticleList() {

    const { data: articles, isFetching, refetch } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', [])

    return (
        <>
            {isFetching
                ? <Spinner />
                : (
                    <div className="wrapper">
                        {articles.map((article) => <ArticleCard key={article._id} {...article} />)}
                    </div>
                )
            }

            <button onClick={refetch} className="btn">Refetch</button>
        </>
    )
}