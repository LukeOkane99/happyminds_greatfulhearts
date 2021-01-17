import React from 'react'
import { MapPin, Smartphone, Mail, Facebook, Instagram } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  phone,
  email,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
            <a className="Contact--Details--Item" href={`https://www.facebook.com/happymindsgratefulhearts`} target="_blank" rel="noreferrer">
              <Facebook />  https://www.facebook.com/happymindsgratefulhearts
            </a>
            <a className="Contact--Details--Item" href={`https://www.instagram.com/happyminds_gratefulhearts/`} target="_blank" rel="noreferrer">
              <Instagram /> https://www.instagram.com/happyminds_gratefulhearts
            </a>
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
      }
    }
  }
`
