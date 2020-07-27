import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

type SEOProps = {
  children?: Object
  pageDescription: string
  pageTitle: string
  pageUrl: string
  pageImage?: string
}

function SEO({
  children,
  pageDescription,
  pageTitle,
  pageUrl,
  pageImage,
}: SEOProps) {
  const {
    site: {
      siteMetadata: { description: siteDescription, siteUrl, title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
          siteLocale
          author
        }
      }
    }
  `)

  const title = pageTitle || siteTitle
  const api = "https://i.microlink.io/"
  const cardUrl = `https://cards.microlink.io/?preset=frame&p=2gTYPD4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUludGVyOjQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnCiAgICByZWw9J3N0eWxlc2hlZXQnCiAgLz4KICA8TGluawogICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUZpcmErTW9ubyZkaXNwbGF5PXN3YXAnCiAgICByZWw9J3N0eWxlc2hlZXQnCiAgLz4KPEZsZXgKICBzeD17ewogICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLAogICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsCiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywKICAgIGJnOiAiIzFGMjkzMyIsCiAgfX0KPgogICAgPEltYWdlIHNyYz0iaHR0cHM6Ly9tZWRpYS5ncmFwaGNtcy5jb20vRVpuZzU3MDJUTUt2aW1INXMyMWoiIG1iPXsxNn0gLz4KICAgIAogICAgPFRleHQgYXM9J3NwYW4nIHN4PXt7IGNvbG9yOiAiIzYxNkU3QyIsIG1iOiAzMiwgZm9udFdlaWdodDogNTAwIH19PgogICAgICBBdXRvbWF0aWMgdGVzdGluZyBmb3IgYmFja2VuZCBzZXJ2aWNlcwogICAgPC9UZXh0PgogIAogIDxGbGV4CiAgICBzeD17ewogICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywKICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsCiAgICAgIHdpZHRoOiAnNzUlJywKICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMzBweCA2MHB4JywKICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJywKICAgICAgYm9yZGVyQ29sb3I6ICIjNjE2RTdDIiwKICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JywKICAgICAgbWluSGVpZ2h0OiAyMDAKICAgIH19CiAgPgogICAgPEltYWdlIHNyYz0iaHR0cHM6Ly9tZWRpYS5ncmFwaGNtcy5jb20vNGRBU2xwMFJRbjJibmZoVVhyMGciIC8-CiAgICA8Qm94IHN4PXt7Zm9udEZhbWlseTogIkludGVyIiwgZm9udFdlaWdodDogOTAwLCBmb250U2l6ZTogNDAsIGxldHRlclNwYWNpbmc6IDEsIGNvbG9yOiAiI0Y1RjdGQSIsIGJhY2tncm91bmRDb2xvcjogIiMxMzFBMjAiLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwOiA0LCB0ZXh0QWxpZ246ICdjZW50ZXInfX0-CiAgICAgIDxUZXh0PgogICAgICAgIHtxdWVyeS50aXRsZX0KICAgICAgPC9UZXh0PgogICAgPC9Cb3g-CiAgPC9GbGV4Pgo8L0ZsZXg-CjwvPg&colors.gray900=%231F2933&colors.gray500=%23616E7C&colors.gray50=%23F5F7FA&heading=https%3A%2F%2Fmedia.graphcms.com%2FEZng5702TMKvimH5s21j&subheading=Why+we+open+sourced+our+webapp&subHeading=Automatic+testing+for+backend+services&title=${title}&colors.gray1=%23131A20&bg=undefined&borderColor=undefined&image=undefined&frames=undefined&frame=undefined&theme=undefined`
  const baseOG = `${api}${encodeURIComponent(cardUrl)}`

  return (
    <React.Fragment>
      <Helmet
        defaultTitle={siteTitle}
        htmlAttributes={{ lang: "en" }}
        titleTemplate={`%s | ${siteTitle}`}
      >
        {/* titles */}
        <title>{pageTitle || siteDescription}</title>
        <meta
          property="og:title"
          content={`${pageTitle || siteDescription} | ${siteTitle}`}
        />
        <meta
          property="twitter:title"
          content={`${pageTitle || siteDescription} | ${siteTitle}`}
        />

        {/* URL info */}
        {pageUrl && <link rel="canonical" href={pageUrl} />}
        <meta property="og:url" content={pageUrl || siteUrl} />

        {/* descriptions */}
        <meta name="description" content={pageDescription || siteDescription} />
        <meta
          property="og:description"
          content={pageDescription || siteDescription}
        />

        {/* images */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={pageImage || baseOG} />
        <meta property="twitter:image" content={pageImage || baseOG} />
        <meta name="image" content={pageImage || baseOG} />

        <meta
          name="google-site-verification"
          content="x_u9LXn82cn5TO9Q7XMK6i1JF7mhDzdUuCRWX3jFQXc"
        />
      </Helmet>
      {children}
    </React.Fragment>
  )
}

export default SEO
