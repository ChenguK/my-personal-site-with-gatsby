import React from "react"
import Layout from "../components/layout"

import { graphql, useStaticQuery, Link } from "gatsby"

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark
  const posts = edges.map(({ node }) => (
    <section key={node.fields.slug}>
      <Link to={node.fields.slug}>
        <h1>{node.frontmatter.title}</h1>
      </Link>
      <p>{node.frontmatter.date}</p>
    </section>
  ))

  return (
    <Layout>
      <h1>Check out the blog!</h1>
      {posts}
    </Layout>
  )
}
