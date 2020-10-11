import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import BlogArticleRoll from "../BlogArticleRoll"

const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  :after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
    }
  }
`

export const BlogPageArticles = ({ firebase }) => {
  const [articles = []] = useCollectionData(
    firebase.db.collection("articles"),
    { idField: "id" }
  )
  // const[articles, setArticles] = useState([]);
  const articlesOrdered = articles.sort(function (a, b) {
    if (a.articleNum < b.articleNum) {
      return -1
    } else {
      return 1
    }
  })
  const latestArticles = articlesOrdered.slice(0, 7)

  return (
    <>
      <section>
        <ArticleList>
          {latestArticles.map(article => (
            <BlogArticleRoll
              key={article.id}
              title={article.title}
              time={article.time}
              thumnail={article.thumnail}
              id={article.id}
              date={article.date}
              articleNum={article.articleNum}
            />
          ))}
        </ArticleList>
      </section>
    </>
  )
}
