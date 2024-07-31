import ArticleCard from "./components/ArticleCard"


function App() {


  return (
    <>
      <nav>
        <ul>
          <a href="/"><li>Home</li></a>
        </ul>
      </nav>

      <div className="wrapper">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  )
}

export default App
