
import ArticleCardDetails from "./components/ArticleCardDetails"
import ArticleList from "./components/ArticleList"
import Navigation from "./components/Navigation"


import { Routes, Route } from 'react-router-dom'


function App() {

  

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<h2>Welcome</h2>} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:articleId/details" element={<ArticleCardDetails />} />
      </Routes>

    </>
  )
}

export default App
