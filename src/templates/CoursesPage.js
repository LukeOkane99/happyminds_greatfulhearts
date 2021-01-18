import React from 'react'
import { graphql } from 'gatsby'
import { Facebook, Instagram } from 'react-feather'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'


// Export Template for use in CMS preview
export const CoursesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
        <a className="Contact--Details--Item" href={`https://www.facebook.com/happymindsgratefulhearts`} target="_blank" rel="noreferrer">
              <Facebook />  Like Our Facebook Page
        </a>
        <a className="Contact--Details--Item" href={`https://www.instagram.com/happyminds_gratefulhearts/`} target="_blank" rel="noreferrer">
            <Instagram /> Follow us on Instagram
        </a>
      </div>
    </section>
  </main>
)

const CoursesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CoursesPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default CoursesPage

export const pageQuery = graphql`
  query CoursesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`