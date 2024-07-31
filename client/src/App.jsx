
import ArticleCard from "./components/ArticleCard"
import Spinner from "./components/Spinner"
import { useFetch } from "./hooks/useFetch"


function App() {

  const { data: articles, isFetching } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', [])

  return (
    <>
      <nav>
        <ul>
          <a href="/"><li>Home</li></a>
        </ul>
      </nav>

      {isFetching
        ? <Spinner />
        : (
          <div className="wrapper">
            {articles.map((article) => <ArticleCard key={article._id} {...article} />)}
          </div>
        )
      }

    </>
  )
}

export default App
