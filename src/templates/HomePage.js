import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery 
}) => (
  <main className="Home">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1>About Happy Minds Greatful Hearts</h1>
        <img src="https://scontent.fbhd1-1.fna.fbcdn.net/v/t31.0-8/20776817_10203651262038529_1335609012567740785_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=LXVZT0uLihgAX_z0fyh&_nc_ht=scontent.fbhd1-1.fna&oh=c6a8b2e83839119add0b709ad80deb11&oe=602818E7" alt="Amanda" style={{ width: `300px`, height: 'auto', paddingBottom: `2rem`, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}></img>
        <p style={{ textAlign: 'center' }}>Amanda Jayne Brennan (me) - Certified Mindfulness Instructor</p>
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Gallery</h2>
        <p>We are always uploading new media to our <a href="https://www.facebook.com/happymindsgratefulhearts/photos/?ref=page_internal" target="_blank" rel="noreferrer">Facebook</a> page so please feel free to keep up to date with us there and like our page!</p>
        <Gallery images={gallery} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
