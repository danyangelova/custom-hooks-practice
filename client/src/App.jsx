
import ArticleCard from "./components/ArticleCard"
import { useFetch } from "./hooks/useFetch"


function App() {

  const { data: articles } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', [])

  return (
    <>
      <nav>
        <ul>
          <a href="/"><li>Home</li></a>
        </ul>
      </nav>

      <div className="wrapper">
        {articles.map((article) => <ArticleCard key={article._id} {...article} />)}
      </div>
    </>
  )
}

export default App
